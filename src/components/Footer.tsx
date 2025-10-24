import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Projet universitaire - 2025
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Équipe : [Rzeygui Mohamed Ali], [Benyaala Wael], [Abrougui Elaa], [Selmi Houssem]
            </p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
