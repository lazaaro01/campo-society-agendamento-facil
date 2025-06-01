
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">⚽</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 hover:text-primary transition-colors">
                Arena_v3_Rodolfo_Teofilo
              </h1>
              <p className="text-xs md:text-sm text-primary font-semibold">Premium</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant={isActive('/') ? 'default' : 'ghost'}
              onClick={() => navigate('/')}
              className="text-sm hover:scale-105 transition-transform"
            >
              Início
            </Button>
            <Button
              variant={isActive('/teams') ? 'default' : 'ghost'}
              onClick={() => navigate('/teams')}
              className="text-sm hover:scale-105 transition-transform"
            >
              Times
            </Button>
            <Button
              variant={isActive('/schedule') ? 'default' : 'ghost'}
              onClick={() => navigate('/schedule')}
              className="text-sm hover:scale-105 transition-transform"
            >
              Agendamentos
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/schedule')}
              className="hover:scale-105 transition-transform"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
