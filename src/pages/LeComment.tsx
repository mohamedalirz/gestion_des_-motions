import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Mail, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

type Option = { value: string; text: string; points: number };
type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer?: string;
};

const getRandomQuestions = (allQuestions: Question[], count: number) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const LeComment = () => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const allQuestions: Question[] = [
    {
      id: 1,
      question:
        "Quelle est la première composante de l'Intelligence Émotionnelle (IE) selon Daniel Goleman, essentielle pour la gestion des émotions ?",
      options: [
        { value: "a", text: "La gestion des relations.", points: 0 },
        { value: "b", text: "La conscience de soi.", points: 2 },
        { value: "c", text: "La motivation intrinsèque.", points: 0 },
        { value: "d", text: "La conscience sociale (empathie).", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "L'objectif principal de la gestion des émotions est de :",
      options: [
        { value: "a", text: "Supprimer complètement les émotions négatives au travail.", points: 0 },
        { value: "b", text: "Identifier, comprendre et réguler ses émotions pour adapter son comportement.", points: 2 },
        { value: "c", text: "Manipuler les émotions des autres pour atteindre ses objectifs.", points: 0 },
        { value: "d", text: "Ignorer les signaux émotionnels pour rester purement rationnel.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question:
        "Lorsqu'un manager fait preuve d'empathie, il utilise quelle composante de l'Intelligence Émotionnelle ?",
      options: [
        { value: "a", text: "La conscience de soi.", points: 0 },
        { value: "b", text: "La gestion de soi.", points: 0 },
        { value: "c", text: "La gestion des relations.", points: 0 },
        { value: "d", text: "La conscience sociale.", points: 2 },
      ],
      correctAnswer: "d",
    },
    {
      id: 4,
      question:
        "Quelle technique de gestion des émotions implique de prendre une pause avant de répondre à un e-mail agressif ?",
      options: [
        { value: "a", text: "La réévaluation cognitive.", points: 0 },
        { value: "b", text: "Le recadrage.", points: 0 },
        { value: "c", text: "L'évitement du conflit.", points: 0 },
        { value: "d", text: "La pause émotionnelle (Stop and Think).", points: 2 },
      ],
      correctAnswer: "d",
    },
    {
      id: 5,
      question: "Laquelle de ces émotions est souvent considérée comme l'une des six émotions de base ?",
      options: [
        { value: "a", text: "La jalousie.", points: 0 },
        { value: "b", text: "Le dégoût.", points: 2 },
        { value: "c", text: "La honte.", points: 0 },
        { value: "d", text: "L'ennui.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 6,
      question:
        "L'utilisation de la méthode DESC (Décrire, Exprimer, Suggérer, Conséquence) dans une situation tendue permet principalement de :",
      options: [
        { value: "a", text: "Garanti une solution immédiate au problème.", points: 0 },
        { value: "b", text: "Communiquer une émotion forte sans blâmer l'autre partie.", points: 2 },
        { value: "c", text: "Masquer l'émotion réelle pour maintenir une image de professionnalisme.", points: 0 },
        { value: "d", text: "Démontrer son autorité sur le sujet en question.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      question:
        "En quoi l'Intelligence Émotionnelle contribue-t-elle à la performance globale de l'entreprise ?",
      options: [
        { value: "a", text: "Elle augmente le budget alloué aux ressources humaines.", points: 0 },
        { value: "b", text: "Elle améliore la résilience de l'équipe et la qualité de la prise de décision sous pression.", points: 2 },
        { value: "c", text: "Elle réduit le besoin de formation continue des employés.", points: 0 },
        { value: "d", text: "Elle garantit la conformité légale de l'entreprise.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 8,
      question:
        "Un collègue est visiblement en colère. La première étape de la gestion des relations est de :",
      options: [
        { value: "a", text: "Lui dire calmement qu'il doit se ressaisir et être professionnel.", points: 0 },
        { value: "b", text: "Appliquer l'écoute active et valider son émotion (« Je vois que tu es frustré. »).", points: 2 },
        { value: "c", text: "Changer immédiatement de sujet pour éviter l'escalade.", points: 0 },
        { value: "d", text: "Quitter la pièce pour lui laisser le temps de se calmer seul.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 9,
      question: "Laquelle de ces phrases montre une faible gestion des émotions dans la communication ?",
      options: [
        { value: "a", text: "« Je pense que nous devrions revoir cette proposition. »", points: 0 },
        { value: "b", text: "« C'est toujours la même chose avec toi, tu es irresponsable ! »", points: 2 },
        { value: "c", text: "« J'ai été frustré par cette erreur, pourrions-nous en discuter ? »", points: 0 },
        { value: "d", text: "« J'aimerais que nous trouvions une solution qui nous convienne à tous les deux. »", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 10,
      question: "Quel terme désigne la capacité à se mettre à la place d'autrui pour comprendre ses émotions ?",
      options: [
        { value: "a", text: "L'assertivité.", points: 0 },
        { value: "b", text: "La projection.", points: 0 },
        { value: "c", text: "L'empathie.", points: 2 },
        { value: "d", text: "La sympathie.", points: 0 },
      ],
      correctAnswer: "c",
    },
    {
      id: 11,
      question: "Qu'est-ce que l'« Amygdale » dans le contexte de la réaction émotionnelle ?",
      options: [
        { value: "a", text: "La partie du cerveau responsable du raisonnement logique et de la planification.", points: 0 },
        { value: "b", text: "Le centre d'alarme du cerveau qui déclenche les réactions de peur ou de colère rapides (Fight or Flight).", points: 2 },
        { value: "c", text: "Une technique de respiration pour calmer le corps.", points: 0 },
        { value: "d", text: "Le système de récompense qui génère la motivation.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 12,
      question: "La gestion de soi (deuxième pilier de l'IE) inclut principalement :",
      options: [
        { value: "a", text: "La capacité à repérer les non-dits chez les autres.", points: 0 },
        { value: "b", text: "La transparence, l'adaptabilité et la maîtrise de soi (régulation des impulsions).", points: 2 },
        { value: "c", text: "La capacité à former des équipes de travail efficaces.", points: 0 },
        { value: "d", text: "La reconnaissance de ses forces et faiblesses.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 13,
      question: "L'une des conséquences d'une faible IE au sein d'une équipe est :",
      options: [
        { value: "a", text: "Une meilleure concentration sur les tâches techniques.", points: 0 },
        { value: "b", text: "Un taux de 'turnover' (rotation du personnel) élevé et des conflits récurrents.", points: 2 },
        { value: "c", text: "Une culture de feedback direct et constructif.", points: 0 },
        { value: "d", text: "L'émergence d'un leadership fort et autoritaire.", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 14,
      question: "Que signifie le concept de 'contagion émotionnelle' en entreprise ?",
      options: [
        { value: "a", text: "Le fait que les émotions positives ou négatives se propagent d'une personne à l'autre dans le groupe.", points: 2 },
        { value: "b", text: "La capacité d'un leader à masquer ses propres émotions.", points: 0 },
        { value: "c", text: "Le besoin de partager immédiatement ses succès et ses échecs.", points: 0 },
        { value: "d", text: "L'obligation d'un manager de gérer les émotions de son équipe.", points: 0 },
      ],
      correctAnswer: "a",
    },
    {
      id: 15,
      question:
        "Face à un client très irrité, la technique la plus appropriée, relevant de l'IE, est :",
      options: [
        { value: "a", text: "Lui assurer que son problème est mineur et qu'il n'a pas lieu d'être irrité.", points: 0 },
        { value: "b", text: "Reformuler sa plainte avec ses propres mots pour montrer que l'on comprend son point de vue.", points: 2 },
        { value: "c", text: "Passer le client à un autre collègue pour éviter la confrontation.", points: 0 },
        { value: "d", text: "Répondre par le même niveau d'irritation pour montrer qu'on ne se laisse pas faire.", points: 0 },
      ],
      correctAnswer: "b",
    },
  ];

  useEffect(() => {
    // choisissez 5 questions aléatoires au montage
    const selected = getRandomQuestions(allQuestions, 5);
    setQuizQuestions(selected);
    setQuizAnswers({});
    setShowResults(false);
  }, []);

  const regenerateQuiz = () => {
    const selected = getRandomQuestions(allQuestions, 5);
    setQuizQuestions(selected);
    setQuizAnswers({});
    setShowResults(false);
  };

  const handleQuizSubmit = () => {
    if (Object.keys(quizAnswers).length < quizQuestions.length) {
      toast.error("Veuillez répondre à toutes les questions");
      return;
    }
    setShowResults(true);
  };

  const calculateScore = () => {
    let totalPoints = 0;
    quizQuestions.forEach((q) => {
      const answer = quizAnswers[q.id];
      const option = q.options.find((opt) => opt.value === answer);
      if (option) totalPoints += option.points;
    });
    return totalPoints;
  };

  const getScoreMessage = (score: number) => {
    // max = 5 questions * 2 points = 10
    if (score >= 8) return { text: "Excellent ! Vous avez une grande intelligence émotionnelle.", emoji: "🌟" };
    if (score >= 5) return { text: "Bien ! Vous êtes sur la bonne voie.", emoji: "👍" };
    return { text: "À améliorer. Continuez à vous exercer !", emoji: "💪" };
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
          <h2 className="text-3xl font-bold mb-6 text-center">
            Gérer ses émotions, ce n’est pas les bloquer ni les ignorer, mais apprendre à les comprendre et à les exprimer de manière positive.
            Voici quelques étapes concrètes pour y arriver :
          </h2>

          <div className="space-y-6">
            {[1,2,3,4,5].map((n) => {
              const titles = [
                "La première étape, c’est de reconnaître ce qu’on ressent.",
                "Avant de réagir, il faut respirer, faire une pause, ou changer de cadre quelques minutes. ",
                "Au lieu d’accuser (“tu m’énerves”), on peut utiliser le “je ressens”.",
                "Gérer ses émotions, c’est aussi savoir écouter celles des autres sans juger.",
                "Trouver un équilibre personnel: sport, méditation, écriture, temps pour soi."
              ];
              return (
                <div key={n} className="gradient-card p-8 rounded-xl shadow-card">
                  <div className="relative">
                    <Card className="p-6 gradient-card border-0 shadow-card h-full">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-primary">{n}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-3 text-center">{titles[n-1]}</h3>
                    </Card>
                    {n < 5 && <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-3xl">→</div>}
                  </div>
                </div>
              );
            })}
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
            {quizQuestions.map((q, index) => (
              <Card key={q.id} className="p-6 gradient-card border-0 shadow-card">
                <h3 className="font-semibold text-lg mb-4">Question {index + 1}: {q.question}</h3>
                <RadioGroup
                  value={quizAnswers[q.id] ?? ""}
                  onValueChange={(value) => setQuizAnswers({ ...quizAnswers, [q.id]: value })}
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
            <div className="text-center mt-8 space-y-3">
              <Button onClick={handleQuizSubmit} size="lg" className="gap-2">
                Voir mes résultats
              </Button>
              <div>
                <Button variant="ghost" onClick={regenerateQuiz}>Refaire le test (nouveau tirage)</Button>
              </div>
            </div>
          )}

          {showResults && (
            <div className="text-center mt-8 space-y-4">
              <Card className="mt-2 p-8 gradient-primary text-primary-foreground border-0 shadow-hover">
                <h3 className="text-2xl font-bold mb-2">Votre Score : {calculateScore()}/10</h3>
                <p className="text-lg mb-2">{getScoreMessage(calculateScore()).emoji}</p>
                <p className="text-xl">{getScoreMessage(calculateScore()).text}</p>
              </Card>

              <div className="flex justify-center gap-3 mt-4">
                <Button onClick={() => { setShowResults(false); setQuizAnswers({}); }} size="sm">Voir à nouveau les questions</Button>
                <Button onClick={regenerateQuiz} size="sm">Refaire le test (nouveau tirage)</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default LeComment;
