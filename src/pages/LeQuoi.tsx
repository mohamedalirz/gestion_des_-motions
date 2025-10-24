import { Card } from "@/components/ui/card";
import { Brain, Eye, Target, Heart, Users as UsersIcon, Smile, Frown, Angry, Meh, AlertCircle, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const LeQuoi = () => {
  const pillars = [
    {
      title: "Conscience de soi",
      description: "C’est la capacité à reconnaître et comprendre ses propres émotions.",
      icon: Eye,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Maîtrise de soi",
      description: "Gérer ses émotions de manière constructive. Savoir rester calme et prendre du recul avant de réagir.",
      icon: Target,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Motivation",
      description: "C’est la capacité à rester positif et persévérant, même face aux échecs ou à la pression.",
      icon: Sparkles,
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      title: "Empathie",
      description: "Comprendre et ressentir les émotions des autres. Se mettre à la place d'autrui pour mieux communiquer.",
      icon: Heart,
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      title: "Compétences sociales",
      description: "Ce sont les aptitudes à bien interagir avec les autres, à communiquer efficacement, à résoudre les conflits, et à collaborer.",
      icon: UsersIcon,
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const emotions = [
    { name: "Joie", icon: Smile, color: "text-yellow-500", description: "Sentiment de bonheur et de satisfaction" },
    { name: "Tristesse", icon: Frown, color: "text-blue-500", description: "Sentiment de peine ou de mélancolie" },
    { name: "Colère", icon: Angry, color: "text-red-500", description: "Réaction face à une frustration ou injustice" },
    { name: "Peur", icon: AlertCircle, color: "text-orange-500", description: "Réponse face à un danger perçu" },
    { name: "Surprise", icon: Sparkles, color: "text-purple-500", description: "Réaction face à l'inattendu" },
    { name: "Dégoût", icon: Meh, color: "text-green-600", description: "Réaction de rejet face à quelque chose" }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 px-4 gradient-soft">
        <div className="container mx-auto text-center">
          <Brain className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Quoi</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprendre l'intelligence émotionnelle et ses composantes essentielles
          </p>
        </div>
      </section>

      {/* Définitions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="gradient-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'une émotion ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Une émotion est une <span className="font-semibold text-foreground">réaction psychologique et physique</span> face 
                à une situation. Elle se manifeste par des sensations corporelles, des pensées et des comportements. 
                Les émotions sont universelles et jouent un rôle essentiel dans notre adaptation à l'environnement.
              </p>
            </div>

            <div className="gradient-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-bold mb-4">C'est quoi la gestion des émotions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                la gestion des émotions c’est la capacité à comprendre, exprimer et contrôler ses émotions de manière adaptée dans une situation donnée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 Piliers */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les 5 Piliers de l'Intelligence Émotionnelle</h2>
            <p className="text-lg text-muted-foreground">
              Découvrez les compétences clés pour développer votre IE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="p-6 cursor-pointer transition-smooth hover:scale-105 hover:shadow-hover group gradient-card border-0"
              >
                <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Les 6 Émotions de Base */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les 6 Émotions de Base</h2>
            <p className="text-lg text-muted-foreground">
              Les émotions fondamentales universellement reconnues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {emotions.map((emotion, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-background p-4 rounded-full group-hover:scale-110 transition-smooth">
                    <emotion.icon className={`h-12 w-12 ${emotion.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{emotion.name}</h3>
                <p className="text-sm text-muted-foreground">{emotion.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto gradient-card p-6 rounded-xl shadow-card">
            <p className="text-center text-muted-foreground">
              💡 <span className="font-semibold text-foreground">Bon à savoir :</span> Ces émotions sont présentes 
              dans toutes les cultures et jouent un rôle crucial dans notre communication non-verbale. 
              Apprendre à les reconnaître chez soi et chez les autres est la première étape de l'intelligence émotionnelle.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeQuoi;
