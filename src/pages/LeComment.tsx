import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// --- Générateur de 5 questions aléatoires ---
const getRandomQuestions = (allQuestions: any[], count: number) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const LeComment = () => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);

  // --- Liste complète des 15 questions ---
  const allQuestions = [
    {
      id: 1,
      question:
        "Quelle est la première composante de l'Intelligence Émotionnelle (IE) selon Daniel Goleman, essentielle pour la gestion des émotions ?",
      options: [
        { value: "a", text: "La gestion des relations", points: 0 },
        { value: "b", text: "La conscience de soi", points: 2 },
        { value: "c", text: "La motivation intrinsèque", points: 0 },
        { value: "d", text: "La conscience sociale (empathie)", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question:
        "L'objectif principal de la gestion des émotions est de :",
      options: [
        { value: "a", text: "Supprimer complètement les émotions négatives au travail", points: 0 },
        { value: "b", text: "Identifier, comprendre et réguler ses émotions pour adapter son comportement", points: 2 },
        { value: "c", text: "Manipuler les émotions des autres pour atteindre ses objectifs", points: 0 },
        { value: "d", text: "Ignorer les signaux émotionnels pour rester purement rationnel", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question:
        "Lorsqu'un manager fait preuve d'empathie, il utilise quelle composante de l'Intelligence Émotionnelle ?",
      options: [
        { value: "a", text: "La conscience de soi", points: 0 },
        { value: "b", text: "La gestion de soi", points: 0 },
        { value: "c", text: "La gestion des relations", points: 0 },
        { value: "d", text: "La conscience sociale", points: 2 },
      ],
      correctAnswer: "d",
    },
    {
      id: 4,
      question:
        "Quelle technique de gestion des émotions implique de prendre une pause avant de répondre à un e-mail agressif ?",
      options: [
        { value: "a", text: "La réévaluation cognitive", points: 0 },
        { value: "b", text: "Le recadrage", points: 0 },
        { value: "c", text: "L'évitement du conflit", points: 0 },
        { value: "d", text: "La pause émotionnelle (Stop and Think)", points: 2 },
      ],
      correctAnswer: "d",
    },
    {
      id: 5,
      question:
        "Laquelle de ces émotions est souvent considérée comme l'une des six émotions de base ?",
      options: [
        { value: "a", text: "La jalousie", points: 0 },
        { value: "b", text: "Le dégoût", points: 2 },
        { value: "c", text: "La honte", points: 0 },
        { value: "d", text: "L'ennui", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 6,
      question:
        "L'utilisation de la méthode DESC (Décrire, Exprimer, Suggérer, Conséquence) dans une situation tendue permet principalement de :",
      options: [
        { value: "a", text: "Garantir une solution immédiate", points: 0 },
        { value: "b", text: "Communiquer une émotion forte sans blâmer l'autre partie", points: 2 },
        { value: "c", text: "Masquer l'émotion réelle pour rester professionnel", points: 0 },
        { value: "d", text: "Démontrer son autorité sur le sujet", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      question:
        "En quoi l'Intelligence Émotionnelle contribue-t-elle à la performance globale de l'entreprise ?",
      options: [
        { value: "a", text: "Elle augmente le budget RH", points: 0 },
        { value: "b", text: "Elle améliore la résilience et la prise de décision sous pression", points: 2 },
        { value: "c", text: "Elle réduit les besoins de formation", points: 0 },
        { value: "d", text: "Elle garantit la conformité légale", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 8,
      question:
        "Un collègue est visiblement en colère. La première étape est de :",
      options: [
        { value: "a", text: "Lui dire calmement de se ressaisir", points: 0 },
        { value: "b", text: "Appliquer l'écoute active et valider son émotion", points: 2 },
        { value: "c", text: "Changer de sujet", points: 0 },
        { value: "d", text: "Quitter la pièce", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 9,
      question:
        "Laquelle de ces phrases montre une faible gestion des émotions ?",
      options: [
        { value: "a", text: "Je pense que nous devrions revoir cette proposition", points: 0 },
        { value: "b", text: "C'est toujours la même chose avec toi, tu es irresponsable !", points: 2 },
        { value: "c", text: "J’ai été frustré par cette erreur, pourrions-nous en discuter ?", points: 0 },
        { value: "d", text: "J’aimerais qu’on trouve une solution", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 10,
      question:
        "Quel terme désigne la capacité à se mettre à la place d'autrui ?",
      options: [
        { value: "a", text: "L'assertivité", points: 0 },
        { value: "b", text: "La projection", points: 0 },
        { value: "c", text: "L'empathie", points: 2 },
        { value: "d", text: "La sympathie", points: 0 },
      ],
      correctAnswer: "c",
    },
    {
      id: 11,
      question:
        "Qu'est-ce que l'amygdale dans le cerveau ?",
      options: [
        { value: "a", text: "Le centre du raisonnement", points: 0 },
        { value: "b", text: "Le centre d'alarme déclenchant les réactions de peur ou colère", points: 2 },
        { value: "c", text: "Une technique de respiration", points: 0 },
        { value: "d", text: "Le système de récompense", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 12,
      question:
        "La gestion de soi inclut principalement :",
      options: [
        { value: "a", text: "Repérer les non-dits", points: 0 },
        { value: "b", text: "La transparence, l’adaptabilité et la maîtrise de soi", points: 2 },
        { value: "c", text: "Former des équipes efficaces", points: 0 },
        { value: "d", text: "Reconnaître ses forces", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 13,
      question:
        "Une faible IE dans une équipe entraîne souvent :",
      options: [
        { value: "a", text: "Une meilleure concentration", points: 0 },
        { value: "b", text: "Un fort turnover et des conflits récurrents", points: 2 },
        { value: "c", text: "Un leadership fort", points: 0 },
        { value: "d", text: "Une culture de feedback", points: 0 },
      ],
      correctAnswer: "b",
    },
    {
      id: 14,
      question:
        "Que signifie 'contagion émotionnelle' ?",
      options: [
        { value: "a", text: "Les émotions se propagent d'une personne à l'autre", points: 2 },
        { value: "b", text: "Masquer ses émotions", points: 0 },
        { value: "c", text: "Partager ses succès", points: 0 },
        { value: "d", text: "Gérer les émotions de l’équipe", points: 0 },
      ],
      correctAnswer: "a",
    },
    {
      id: 15,
      question:
        "Face à un client très irrité, la meilleure technique est :",
      options: [
        { value: "a", text: "Lui dire que son problème est mineur", points: 0 },
        { value: "b", text: "Reformuler sa plainte pour montrer la compréhension", points: 2 },
        { value: "c", text: "Passer le client à un collègue", points: 0 },
        { value: "d", text: "Répondre avec irritation", points: 0 },
      ],
      correctAnswer: "b",
    },
  ];

  // --- Choisir 5 questions au hasard au montage du composant ---
  useEffect(() => {
    setQuizQuestions(getRandomQuestions(allQuestions, 5));
  }, []);

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
    if (score >= 8) return { text: "Excellent ! Vous avez une grande intelligence émotionnelle.", emoji: "🌟" };
    if (score >= 5) return { text: "Bien ! Vous êtes sur la bonne voie.", emoji: "👍" };
    return { text: "À améliorer. Continuez à vous exercer !", emoji: "💪" };
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Testez Votre Intelligence Émotionnelle en Entreprise</h2>

        <div className="space-y-6">
          {quizQuestions.map((q, index) => (
            <Card key={q.id} className="p-6 gradient-card border-0 shadow-card">
              <h3 className="font-semibold text-lg mb-4">Question {index + 1}: {q.question}</h3>
              <RadioGroup
                value={quizAnswers[q.id]}
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
          <div className="text-center mt-8">
            <Button onClick={handleQuizSubmit} size="lg" className="gap-2">
              Voir mes résultats
            </Button>
          </div>
        )}

        {showResults && (
          <Card className="mt-8 p-8 gradient-primary text-primary-foreground border-0 shadow-hover text-center">
            <h3 className="text-2xl font-bold mb-4">Votre Score : {calculateScore()}/10</h3>
            <p className="text-lg mb-2">{getScoreMessage(calculateScore()).emoji}</p>
            <p className="text-xl">{getScoreMessage(calculateScore()).text}</p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default LeComment;
