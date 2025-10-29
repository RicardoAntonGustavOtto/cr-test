import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-secondary">Certified</span>
            <br />
            <span className="text-primary">Rubbish</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/search-results" className="text-foreground hover:text-primary transition-colors">
            Directory
          </Link>
          <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/auth">Register My Business</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
