import { Card } from "@/components/ui/card";
import { Users, CheckCircle, Lightbulb, FileCheck, Rocket } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const Processus = () => {
  const teamMembers = [
    {
      name: "Rzeygui Mohamed Ali",
      role: "Chef de Projet",
      avatar: "R",
      color: "bg-blue-600",
      isLeader: true,
      justification: "Coordination générale et vision stratégique du projet"
    },
    {
      name: "Benyaala Wael",
      role: "Recherche et Contenu",
      avatar: "B",
      color: "bg-green-600",
      isLeader: false,
      justification: "Rédaction et structuration des contenus éducatifs"
    },
    {
      name: "Abrougui Elaa",
      role: "Design et UX",
      avatar: "A",
      color: "bg-purple-600",
      isLeader: false,
      justification: "Création de l'expérience visuelle et interactive"
    },
    {
      name: "Houssem Selmi",
      role: "Technique et Développement",
      avatar: "T",
      color: "bg-orange-600",
      isLeader: false,
      justification: "Implémentation technique et intégrations"
    }
  ];

  const timeline = [
    {
      phase: "Phase 1",
      title: "Choix du Thème",
      description: "Brainstorming et sélection de l'intelligence émotionnelle comme sujet principal",
      icon: Lightbulb,

      color: "bg-blue-500/10 text-blue-600"
    },
    {
      phase: "Phase 2",
      title: "Création du Scénario",
      description: "Définition de la structure des 5 pages et des contenus interactifs",
      icon: FileCheck,
      color: "bg-green-500/10 text-green-600"
    },
    {
      phase: "Phase 3",
      title: "Réunion de Validation",
      description: "Présentation du prototype et ajustements basés sur les retours",
      icon: CheckCircle,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      phase: "Phase 4",
      title: "Mise en Ligne Finale",
      description: "Déploiement du site et derniers tests de qualité",
      icon: Rocket,
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 px-4 gradient-soft">
        <div className="container mx-auto text-center">
          <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Processus</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'équipe et la méthodologie derrière ce projet
          </p>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`p-6 gradient-card border-0 shadow-card hover:shadow-hover transition-smooth ${member.isLeader ? 'ring-2 ring-primary' : ''}`}>
                <div className="text-center">
                  <div className={`${member.color} w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg`}>
                    {member.avatar}
                  </div>
                  {member.isLeader && (
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full inline-block mb-2 font-medium">
                      👑 Leader
                    </div>
                  )}
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.justification}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto gradient-card p-6 rounded-xl shadow-card">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-foreground">Pourquoi ce leader ?</span> Sa capacité à coordonner 
              l'équipe, à maintenir la vision globale du projet et à assurer la cohérence entre toutes les parties 
              en fait le choix naturel pour diriger cette initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Méthode - Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Méthode</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-20"></div>
            
            <div className="space-y-12">
              {timeline.map((step, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1">
                    <Card className="p-6 gradient-card border-0 shadow-card hover:shadow-hover transition-smooth">
                      <div className="flex items-start gap-4">
                        <div className={`${step.color} p-3 rounded-xl`}>
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                              {step.phase}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Approche Collaborative</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 gradient-card border-0 shadow-card text-center">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Travail d'Équipe</h3>
              <p className="text-sm text-muted-foreground">
                Réunions hebdomadaires et communication continue
              </p>
            </Card>

            <Card className="p-6 gradient-card border-0 shadow-card text-center">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Validation Continue</h3>
              <p className="text-sm text-muted-foreground">
                Tests réguliers et ajustements basés sur les retours
              </p>
            </Card>

            <Card className="p-6 gradient-card border-0 shadow-card text-center">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Recherche constante de solutions créatives et engageantes
              </p>
            </Card>
          </div>

          <div className="gradient-card p-8 rounded-xl shadow-card text-center">
            <h3 className="text-xl font-bold mb-4">🎯 Notre Objectif</h3>
            <p className="text-muted-foreground leading-relaxed">
              Créer un site éducatif <span className="font-semibold text-foreground">interactif et professionnel</span> qui 
              démontre notre compréhension approfondie de la Gestion des émotions tout en offrant 
              une expérience utilisateur engageante et mémorable. Ce projet reflète notre engagement 
              envers l'excellence académique et notre capacité à travailler efficacement en équipe.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Processus;
