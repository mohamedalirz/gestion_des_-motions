import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Brain, BarChart3, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const Impact = () => {
  const testimonials = [
    {
      name: "Marie D.",
      role: "Chef de Projet",
      avatar: "M",
      quote: "Avant, j'étais souvent stressée et je réagissais impulsivement. Maintenant, je gère ma pression et ma productivité a augmenté de 15%.",
      color: "bg-blue-500"
    },
    {
      name: "Thomas L.",
      role: "Responsable RH",
      avatar: "T",
      quote: "La gestion des émotions m'a aidé à mieux comprendre mon équipe. Les conflits ont diminué et l'ambiance s'est nettement améliorée.",
      color: "bg-green-500"
    },
    {
      name: "Sarah K.",
      role: "Commerciale",
      avatar: "S",
      quote: "Grâce à l'empathie, je comprends mieux mes clients. Mon taux de conversion a augmenté de 25% en 6 mois.",
      color: "bg-purple-500"
    },
    {
      name: "Laurent M.",
      role: "Directeur Général",
      avatar: "L",
      quote: "Développer l'IE dans mon entreprise a transformé notre culture. L'engagement des employés n'a jamais été aussi élevé.",
      color: "bg-orange-500"
    }
  ];

  const impacts = [
    {
      icon: TrendingUp,
      title: "Performance accrue",
      stat: "+30%",
      description: "d'augmentation de la productivité individuelle",
      color: "text-blue-600 bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Meilleure collaboration",
      stat: "65%",
      description: "de réduction des conflits en équipe",
      color: "text-green-600 bg-green-500/10"
    },
    {
      icon: Brain,
      title: "Prise de décision",
      stat: "2x",
      description: "plus de décisions stratégiques efficaces",
      color: "text-purple-600 bg-purple-500/10"
    },
    {
      icon: BarChart3,
      title: "Bien-être au travail",
      stat: "+45%",
      description: "de satisfaction et engagement des employés",
      color: "text-orange-600 bg-orange-500/10"
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 px-4 gradient-soft">
        <div className="container mx-auto text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">L'Impact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comment la gestion des émotions transforme la performance professionnelle
          </p>
        </div>
      </section>

      {/* Statistiques d'Impact */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">La gestion des emotions en Chiffres</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {impacts.map((impact, index) => (
              <Card key={index} className="p-6 gradient-card border-0 shadow-card hover:shadow-hover transition-smooth text-center group">
                <div className={`w-16 h-16 mx-auto rounded-xl ${impact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <impact.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2 text-primary">{impact.stat}</div>
                <h3 className="font-semibold mb-2">{impact.title}</h3>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto gradient-card p-6 rounded-xl shadow-card">
            <p className="text-center text-muted-foreground">
              📊 <span className="font-semibold text-foreground">Source :</span> Études menées par des organisations RH 
              et centres de recherche en psychologie organisationnelle (2020-2024)
            </p>
          </div>
        </div>
      </section>

      {/* Animation Graphique */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">1</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Moins de conflits</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>

            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">2</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">plus de cohésion.</h3>
              </Card>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">1</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Meilleure motivation</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>

            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">2</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">plus de productivité.</h3>
              </Card>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">1</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Climat de confiance</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>

            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/*<span className="text-2xl font-bold text-primary">2</span>*/}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">meilleure communication interne.</h3>
              </Card>
            </div>

          </div>

          
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Ils ont Développé leur gestion des émotions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 gradient-card border-0 shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <Quote className="h-6 w-6 text-primary mb-2" />
                    <p className="text-muted-foreground mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">La Clé du Succès Professionnel</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            La gestion des émotions n'est pas un luxe, c'est une <span className="font-semibold text-foreground">compétence 
            essentielle</span> dans le monde du travail moderne. Elle influence directement la qualité de notre communication, 
            la force de nos relations professionnelles et, in fine, notre performance globale.
          </p>
          <div className="gradient-card p-6 rounded-xl shadow-card">
            <p className="font-semibold text-lg text-primary mb-2">
              💼 Dans un monde où les compétences techniques se démodent rapidement...
            </p>
            <p className="text-muted-foreground">
              La gestion des émotions reste votre atout le plus durable et précieux pour réussir et s'épanouir au travail.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Impact;
