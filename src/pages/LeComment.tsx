import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Mail, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

const LeComment = () => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Un collègue vous critique en réunion. Que faites-vous ?",
      options: [
        { value: "a", text: "Je réplique immédiatement pour me défendre", points: 0 },
        { value: "b", text: "Je prends une pause, respire et demande des précisions", points: 2 },
        { value: "c", text: "Je reste silencieux mais ressasse la critique toute la journée", points: 1 }
      ],
      correctAnswer: "b"
    },
    {
      id: 2,
      question: "Vous êtes stressé avant une présentation importante. Comment réagissez-vous ?",
      options: [
        { value: "a", text: "Je pratique la respiration profonde et visualise ma réussite", points: 2 },
        { value: "b", text: "Je panique et envisage de me faire remplacer", points: 0 },
        { value: "c", text: "Je bois plusieurs cafés pour me donner de l'énergie", points: 1 }
      ],
      correctAnswer: "a"
    },
    {
      id: 3,
      question: "Un membre de votre équipe semble démotivé. Que faites-vous ?",
      options: [
        { value: "a", text: "J'attends qu'il vienne me parler de lui-même", points: 1 },
        { value: "b", text: "Je l'ignore, ce n'est pas mon problème", points: 0 },
        { value: "c", text: "Je prends le temps de discuter avec lui en privé", points: 2 }
      ],
      correctAnswer: "c"
    }
  ];

  const handleQuizSubmit = () => {
    if (Object.keys(quizAnswers).length < quizQuestions.length) {
      toast.error("Veuillez répondre à toutes les questions");
      return;
    }
    setShowResults(true);
  };

  const calculateScore = () => {
    let totalPoints = 0;
    quizQuestions.forEach(q => {
      const answer = quizAnswers[q.id];
      const option = q.options.find(opt => opt.value === answer);
      if (option) totalPoints += option.points;
    });
    return totalPoints;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 5) return { text: "Excellent ! Vous avez une bonne intelligence émotionnelle.", emoji: "🌟" };
    if (score >= 3) return { text: "Bien ! Vous êtes sur la bonne voie.", emoji: "👍" };
    return { text: "À développer. L'intelligence émotionnelle s'apprend !", emoji: "💪" };
  };

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 px-4 gradient-soft">
        <div className="container mx-auto text-center">
          <Lightbulb className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Comment</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Techniques pratiques pour développer votre intelligence émotionnelle
          </p>
        </div>
      </section>

      {/* Vidéo de techniques */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Gérer ses émotions, ce n’est pas les bloquer ni les ignorer, mais apprendre à les comprendre et à les exprimer de manière positive.

Voici quelques étapes concrètes pour y arriver :</h2>
          <div className="gradient-card p-8 rounded-xl shadow-card">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">La première étape, c’est de reconnaître ce qu’on ressent.</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>
            
          </div>

          <div className="gradient-card p-8 rounded-xl shadow-card">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Avant de réagir, il faut respirer, faire une pause, ou changer de cadre quelques minutes.
Cela évite de réagir sous l’effet de la colère ou de la peur.</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>
            
          </div>

          <div className="gradient-card p-8 rounded-xl shadow-card">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Au lieu d’accuser (“tu m’énerves”), on peut utiliser le “je ressens” :
“Je me sens frustré parce que je n’ai pas été écouté.”
C’est plus respectueux et plus efficace</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>

          </div>

          <div className="gradient-card p-8 rounded-xl shadow-card">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Gérer ses émotions, c’est aussi savoir écouter celles des autres sans juger.
Cela permet d’éviter les conflits et d’améliorer la communication</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>
            </div>
            
          </div>

          <div className="gradient-card p-8 rounded-xl shadow-card">
            <div className="relative">
              <Card className="p-6 gradient-card border-0 shadow-card h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-center">Trouver un équilibre personnel: Faire du sport, méditer, écrire, ou simplement prendre du temps pour soi aide à relâcher la pression.
Une bonne hygiène émotionnelle rend plus calme et plus concentré.</h3>
                {/*<p className="text-sm text-muted-foreground text-center">
                  Vous identifiez vos émotions et celles des autres rapidement et précisément
                </p>*/}
              </Card>
            </div>
            
          </div>

        </div>
      </section>

      {/* Scénario Email */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Mise en Situation : L'Email Toxique</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Imaginez : vous recevez cet email de votre manager...
          </p>

          <div className="gradient-card p-6 rounded-xl shadow-card mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="h-5 w-5 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="font-semibold mb-1">De : Votre Manager</p>
                <p className="text-sm text-muted-foreground mb-3">Objet : Votre dernier rapport</p>
                <div className="bg-background/50 p-4 rounded-lg border-l-4 border-destructive">
                  <p className="text-foreground">
                    "J'ai lu votre rapport. Franchement, c'est décevant. On dirait que vous n'avez fait aucun effort. 
                    Je m'attendais à mieux de votre part. Nous devons parler de votre performance."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-destructive/20 hover:border-destructive transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Réaction Impulsive</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>💭 <span className="font-medium text-foreground">Pensée :</span> "Comment ose-t-il ! Je démissionne !"</p>
                <p>😤 <span className="font-medium text-foreground">Émotion :</span> Colère, frustration, sentiment d'injustice</p>
                <p>✉️ <span className="font-medium text-foreground">Action :</span> Répondre immédiatement avec agressivité</p>
                <div className="mt-4 p-3 bg-destructive/10 rounded-lg">
                  <p className="text-sm font-medium text-destructive">⚠️ Conséquence : Conflit escaladé, relation détériorée</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Réaction Intelligente</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>💭 <span className="font-medium text-foreground">Pensée :</span> "Je prends du recul. Que puis-je apprendre ?"</p>
                <p>😌 <span className="font-medium text-foreground">Émotion :</span> Acceptation, curiosité, volonté de s'améliorer</p>
                <p>✉️ <span className="font-medium text-foreground">Action :</span> Demander un rendez-vous pour comprendre</p>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">✅ Conséquence : Dialogue constructif, amélioration</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 gradient-card p-6 rounded-xl shadow-card">
            <p className="text-center font-medium text-foreground">
              💡 La différence ? <span className="text-primary">La pause émotionnelle</span> et le choix conscient de la réponse.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Interactif */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Testez Votre Quotient Émotionnel</h2>
          <p className="text-center text-muted-foreground mb-12">
            Répondez à ces situations pour évaluer votre intelligence émotionnelle
          </p>

          <div className="space-y-6">
            {quizQuestions.map((q) => (
              <Card key={q.id} className="p-6 gradient-card border-0 shadow-card">
                <h3 className="font-semibold text-lg mb-4">{q.id}. {q.question}</h3>
                <RadioGroup 
                  value={quizAnswers[q.id]} 
                  onValueChange={(value) => setQuizAnswers({...quizAnswers, [q.id]: value})}
                >
                  {q.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 mb-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                      <RadioGroupItem value={option.value} id={`q${q.id}-${option.value}`} />
                      <Label htmlFor={`q${q.id}-${option.value}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </Card>
            ))}
          </div>

          {!showResults && (
            <div className="text-center mt-8">
              <Button onClick={handleQuizSubmit} size="lg" className="gap-2">
                Voir mes résultats
              </Button>
            </div>
          )}

          {showResults && (
            <Card className="mt-8 p-8 gradient-primary text-primary-foreground border-0 shadow-hover text-center">
              <h3 className="text-2xl font-bold mb-4">Votre Score : {calculateScore()}/6</h3>
              <p className="text-lg mb-2">{getScoreMessage(calculateScore()).emoji}</p>
              <p className="text-xl">{getScoreMessage(calculateScore()).text}</p>
            </Card>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default LeComment;
