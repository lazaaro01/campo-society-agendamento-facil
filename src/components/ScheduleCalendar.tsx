import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react"; 

interface Booking {
  id: string;
  date: string;
  time: string;
  team: string;
  duration: number;
  paymentMethod: string;
}

const ScheduleCalendar = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [teamName, setTeamName] = useState('');
  const [duration, setDuration] = useState('60');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Gerar horários disponíveis baseados no dia da semana
  const generateTimeSlots = (dateStr: string) => {
    if (!dateStr) return [];
    
    const date = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = date.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    
    const slots = [];
    
    if (dayOfWeek === 6) { // Sábado
      // Sábado: 16:00 às 20:00
      for (let hour = 16; hour < 20; hour++) {
        const timeStr = `${hour.toString().padStart(2, '0')}:00`;
        slots.push(timeStr);
      }
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Segunda a sexta
      // Segunda a sexta: 07:00 às 23:00
      for (let hour = 7; hour < 23; hour++) {
        const timeStr = `${hour.toString().padStart(2, '0')}:00`;
        slots.push(timeStr);
      }
    }
    // Domingo não tem horários disponíveis
    
    return slots;
  };

  const timeSlots = generateTimeSlots(selectedDate);

  const isTimeSlotAvailable = (date: string, time: string) => {
    return !bookings.some(booking => 
      booking.date === date && booking.time === time
    );
  };

  const getPrice = (duration: number) => {
    // Preços por duração (em R$)
    const prices = {
      60: 80,
      90: 110,
      120: 140
    };
    return prices[duration] || 80;
  };

  const redirectToWhatsApp = (booking: Booking, price: number) => {
    const phoneNumber = "5585992114586"; // Substitua pelo número real do responsável
    
    const paymentInfo = `💰 Pagamento: Dinheiro (pagar no local)`;

    const message = `Olá! Gostaria de confirmar o agendamento da Arena_v3_Rodolfo_Teofilo:
    
📅 Data: ${formatDate(booking.date)}
⏰ Horário: ${booking.time}
👥 Time: ${booking.team}
⏱️ Duração: ${booking.duration} minutos
💵 Valor: R$ ${price},00
${paymentInfo}

Aguardo a confirmação!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !teamName || !paymentMethod) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    if (!isTimeSlotAvailable(selectedDate, selectedTime)) {
      toast({
        title: "Horário indisponível",
        description: "Este horário já está ocupado. Escolha outro.",
        variant: "destructive"
      });
      return;
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      date: selectedDate,
      time: selectedTime,
      team: teamName,
      duration: parseInt(duration),
      paymentMethod: paymentMethod
    };

    const price = getPrice(parseInt(duration));
    setBookings([...bookings, newBooking]);

    toast({
      title: "Agendamento realizado!",
      description: `Campo reservado para ${teamName}. Pagamento no local: R$ ${price},00`,
    });
    
    // Redirecionar para WhatsApp após 2 segundos
    setTimeout(() => {
      redirectToWhatsApp(newBooking, price);
    }, 2000);

    setSelectedDate('');
    setSelectedTime('');
    setTeamName('');
    setDuration('60');
    setPaymentMethod('');
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('pt-BR');
  };

  const getDayName = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = date.getDay();
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayOfWeek];
  };

  const getOperatingHours = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = date.getDay();
    
    if (dayOfWeek === 6) { // Sábado
      return '16:00 - 20:00';
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Segunda a sexta
      return '07:00 - 23:00';
    } else { // Domingo
      return 'Fechado';
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Agendar Horário
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getTodayDate()}
                  required
                />
                {selectedDate && (
                  <p className="text-sm text-gray-600">
                    {getDayName(selectedDate)} - {getOperatingHours(selectedDate)}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Horário</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.length === 0 && selectedDate && (
                      <SelectItem value="" disabled>
                        {getDayName(selectedDate) === 'Domingo' ? 'Fechado aos domingos' : 'Nenhum horário disponível'}
                      </SelectItem>
                    )}
                    {timeSlots.map((time) => (
                      <SelectItem 
                        key={time} 
                        value={time}
                        disabled={selectedDate ? !isTimeSlotAvailable(selectedDate, time) : false}
                      >
                        {time} {selectedDate && !isTimeSlotAvailable(selectedDate, time) && '(Ocupado)'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="team">Nome do Time</Label>
                <Input
                  id="team"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Ex: Falcões FC"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duração</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="60">60 min - R$ 80,00</SelectItem>
                    <SelectItem value="90">90 min - R$ 110,00</SelectItem>
                    <SelectItem value="120">120 min - R$ 140,00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Forma de Pagamento</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1 cursor-pointer">
                    <div className="font-medium">Dinheiro</div>
                    <div className="text-sm text-gray-500">Pagar no local</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {duration && (
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-center font-semibold text-lg">
                  Total: R$ {getPrice(parseInt(duration))},00
                </p>
              </div>
            )}

            <Button type="submit" className="w-full">
              Confirmar Agendamento
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Agendamentos Realizados</CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Nenhum agendamento realizado ainda.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings
                .sort((a, b) => new Date(a.date + ' ' + a.time).getTime() - new Date(b.date + ' ' + b.time).getTime())
                .map((booking) => (
                <div key={booking.id} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.team}</h3>
                      <p className="text-gray-600">Data: {formatDate(booking.date)}</p>
                      <p className="text-gray-600">Horário: {booking.time}</p>
                      <p className="text-gray-600">Duração: {booking.duration} minutos</p>
                      <p className="text-gray-600">
                        Pagamento: Dinheiro
                      </p>
                      <p className="text-gray-600 font-semibold">
                        Valor: R$ {getPrice(booking.duration)},00
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                        Confirmado
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horário de Funcionamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold text-lg">Segunda a Sexta</p>
              <p className="text-gray-600">🕐 07:00 às 23:00</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold text-lg">Sábado</p>
              <p className="text-gray-600">🕐 04:00 às 20:00</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold text-lg">Domingo</p>
              <p className="text-gray-600">❌ Agendado</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleCalendar;