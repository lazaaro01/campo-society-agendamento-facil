
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group flex-1 min-w-0"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">⚽</span>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 hover:text-primary transition-colors truncate">
                Arena_v3_Rodolfo_Teofilo
              </h1>
              <p className="text-xs sm:text-sm text-primary font-semibold">Premium</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button
                    variant={isActive('/') ? 'default' : 'ghost'}
                    onClick={() => navigate('/')}
                    className="justify-start text-left"
                  >
                    Início
                  </Button>
                  <Button
                    variant={isActive('/teams') ? 'default' : 'ghost'}
                    onClick={() => navigate('/teams')}
                    className="justify-start text-left"
                  >
                    Times
                  </Button>
                  <Button
                    variant={isActive('/schedule') ? 'default' : 'ghost'}
                    onClick={() => navigate('/schedule')}
                    className="justify-start text-left"
                  >
                    Agendamentos
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
