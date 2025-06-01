
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="soccer-gradient field-pattern text-white py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
            Arena_v3_Rodolfo_Teofilo
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-95 px-2">
            O melhor campo society da região. Grama sintética de qualidade, 
            vestiários completos e sistema de agendamento online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/schedule')}
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 hover:scale-105 transition-transform shadow-lg w-full sm:w-auto"
            >
              Agendar Horário
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/teams')}
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 hover:scale-105 transition-all shadow-lg w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
            >
              Cadastrar Time
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">
            Por que escolher nosso campo?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">Agendamento Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Sistema fácil e rápido para agendar seu horário. 
                  Disponível 24/7 pela internet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">Cadastro de Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Registre seu time e tenha acesso a descontos especiais 
                  e prioridade nos agendamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">Horário Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Funcionamos das 7h às 23h de segunda à sexta e das 4h às 20h no sábado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white/95 backdrop-blur-sm py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
                  Estrutura Completa
                </h2>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-600">
                  <li className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Grama sintética de última geração
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Iluminação LED profissional
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Vestiários com chuveiro quente
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Estacionamento gratuito
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Lanchonete no local
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 text-center shadow-xl order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">Horário de Funcionamento</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                      07:00 - 23:00
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">Segunda a Sexta</p>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1">
                      04:00 - 20:00
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">Sábado</p>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500 mb-1">
                      Fechado
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">Domingo</p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                  <p className="text-sm text-gray-500 mb-3 sm:mb-4">
                    Pronto para jogar?
                  </p>
                  <Button 
                    onClick={() => navigate('/schedule')}
                    className="w-full hover:scale-105 transition-transform text-sm sm:text-base"
                  >
                    Agendar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/95 backdrop-blur-sm text-white py-6 md:py-8">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base">⚽</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold">Arena_v3_Rodolfo_Teofilo</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base px-2">
            O melhor campo society da região - Sistema de agendamento online
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
