import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gérer le Cœur de l'Entreprise
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-foreground font-medium">
              Votre Guide de Gestion des émotions
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comment la Gestion des émotions influence la communication et la performance au travail ? 
              Découvrez les clés pour développer vos compétences émotionnelles et transformer votre environnement professionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/le-quoi">
                <Button size="lg" className="gap-2 shadow-card hover:shadow-hover transition-smooth">
                  Découvrir <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/le-comment">
                <Button size="lg" variant="outline" className="gap-2">
                  Apprendre les techniques
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problématique Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi la Gestion des émotions ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Dans un environnement de travail en perpétuel changement, la gestion des émotions représente un véritable levier de réussite.
Elle favorise une communication claire, une meilleure compréhension mutuelle et une ambiance de travail positive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mieux se comprendre</h3>
              <p className="text-muted-foreground">
                Développez votre conscience de soi et comprenez comment vos émotions 
                influencent vos décisions et vos relations.
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Améliorer la communication</h3>
              <p className="text-muted-foreground">
                Créez des relations plus authentiques et productives grâce à une 
                meilleure compréhension des émotions d'autrui.
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Booster la performance</h3>
              <p className="text-muted-foreground">
                Transformez vos compétences émotionnelles en avantage compétitif 
                pour atteindre vos objectifs professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à développer votre intelligence émotionnelle ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explorez nos contenus pour comprendre, apprendre et mesurer l'impact 
            de l'intelligence émotionnelle dans votre quotidien professionnel.
          </p>
          <Link to="/le-quoi">
            <Button size="lg" className="gap-2">
              Commencer maintenant <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
