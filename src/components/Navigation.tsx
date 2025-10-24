import { NavLink } from "react-router-dom";
import { Brain, Home, BookOpen, Lightbulb, TrendingUp, Users } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/le-quoi", label: "Le Quoi", icon: Brain },
    { path: "/le-comment", label: "Le Comment", icon: Lightbulb },
    { path: "/impact", label: "L'Impact", icon: TrendingUp },
    { path: "/processus", label: "Notre Processus", icon: Users },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl hidden md:block">Gestion des émotions</span>
          </div>
          
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
