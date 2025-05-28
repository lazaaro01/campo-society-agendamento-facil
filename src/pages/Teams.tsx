
import Header from "@/components/Header";
import TeamRegistrationForm from "@/components/TeamRegistrationForm";

const Teams = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Cadastro de Times
            </h1>
            <p className="text-gray-600">
              Cadastre seu time para poder fazer agendamentos no campo
            </p>
          </div>
          
          <TeamRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Teams;
