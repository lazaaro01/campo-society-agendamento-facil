import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="soccer-gradient field-pattern text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Arena_v3_Rodolfo_Teofilo
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O melhor campo society da região. Grama sintética de qualidade, 
            vestiários completos e sistema de agendamento online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/schedule')}
              className="text-lg px-8 py-3"
            >
              Agendar Horário
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/teams')}
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
            >
              Cadastrar Time
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nosso campo?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Agendamento Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema fácil e rápido para agendar seu horário. 
                  Disponível 24/7 pela internet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Cadastro de Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Registre seu time e tenha acesso a descontos especiais 
                  e prioridade nos agendamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Horário Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Funcionamos das 8h às 22h todos os dias, 
                  para você jogar quando for mais conveniente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Estrutura Completa
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Grama sintética de última geração
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Iluminação LED profissional
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Vestiários com chuveiro quente
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Estacionamento gratuito
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lanchonete no local
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  08:00 - 22:00
                </div>
                <p className="text-gray-600">Todos os dias da semana</p>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 mb-4">
                    Pronto para jogar?
                  </p>
                  <Button 
                    onClick={() => navigate('/schedule')}
                    className="w-full"
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">⚽</span>
            </div>
            <span className="text-xl font-bold">Arena_v3_Rodolfo_Teofilo</span>
          </div>
          <p className="text-gray-400">
            O melhor campo society da região - Sistema de agendamento online
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
