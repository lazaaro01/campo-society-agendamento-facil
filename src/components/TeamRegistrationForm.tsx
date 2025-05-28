
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface Team {
  id: string;
  name: string;
  captain: string;
  phone: string;
  players: number;
  email: string;
}

const TeamRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    captain: '',
    phone: '',
    players: '',
    email: ''
  });

  const [teams, setTeams] = useState<Team[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.captain || !formData.phone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const newTeam: Team = {
      id: Date.now().toString(),
      name: formData.name,
      captain: formData.captain,
      phone: formData.phone,
      players: parseInt(formData.players) || 0,
      email: formData.email
    };

    setTeams([...teams, newTeam]);
    setFormData({ name: '', captain: '', phone: '', players: '', email: '' });
    
    toast({
      title: "Time cadastrado!",
      description: `${formData.name} foi cadastrado com sucesso.`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Cadastro de Time</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Time *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Ex: Falcões FC"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="captain">Capitão do Time *</Label>
                <Input
                  id="captain"
                  value={formData.captain}
                  onChange={(e) => handleInputChange('captain', e.target.value)}
                  placeholder="Nome do capitão"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="players">Número de Jogadores</Label>
                <Input
                  id="players"
                  type="number"
                  value={formData.players}
                  onChange={(e) => handleInputChange('players', e.target.value)}
                  placeholder="Ex: 11"
                  min="1"
                  max="20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="time@exemplo.com"
              />
            </div>

            <Button type="submit" className="w-full">
              Cadastrar Time
            </Button>
          </form>
        </CardContent>
      </Card>

      {teams.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Times Cadastrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teams.map((team) => (
                <div key={team.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{team.name}</h3>
                      <p className="text-gray-600">Capitão: {team.captain}</p>
                      <p className="text-gray-600">Telefone: {team.phone}</p>
                      {team.email && <p className="text-gray-600">E-mail: {team.email}</p>}
                      {team.players > 0 && <p className="text-gray-600">Jogadores: {team.players}</p>}
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⚽</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeamRegistrationForm;
