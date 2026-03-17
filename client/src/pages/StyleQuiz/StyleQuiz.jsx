import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Fixed image paths
import bed1 from "../../assets/projects/bedroom1.jpeg";
import liv1 from "../../assets/projects/livingroom1.jpeg";
import rend1 from "../../assets/renders/render1.jpeg";
import rend2 from "../../assets/renders/render2.jpeg";
import rend3 from "../../assets/renders/render3.jpeg";

// hero image
import hero3 from "../../assets/hero/hero3.jpeg";

const quizSteps = [
  {
    id: 1,
    question: "Which living room speaks to you the most?",
    type: "image",
    options: [
      { id: "a", image: liv1, label: "Modern & Minimalist" },
      { id: "b", image: rend1, label: "Warm & Earthy" },
      { id: "c", image: rend2, label: "Sleek & Contemporary" },
    ]
  },
  {
    id: 2,
    question: "Select the bedroom that feels most like a sanctuary.",
    type: "image",
    options: [
      { id: "a", image: bed1, label: "Monochrome Elegance" },
      { id: "b", image: rend3, label: "Airy & Light" },
      { id: "c", image: hero3, label: "Dark & Moody" },
    ]
  },
  {
    id: 3,
    question: "What is your primary goal for this project?",
    type: "text",
    options: [
      { id: "a", label: "A complete room makeover from scratch." },
      { id: "b", label: "Refreshing the styling with my existing furniture." },
      { id: "c", label: "Designing a brand new empty house/apartment." },
      { id: "d", label: "I'm just browsing for inspiration." },
    ]
  },
  {
    id: 4,
    question: "What is your estimated budget for furnishings?",
    type: "text",
    options: [
      { id: "a", label: "Under PKR 500,000" },
      { id: "b", label: "PKR 500k - 1.5M" },
      { id: "c", label: "PKR 1.5M - 3M" },
      { id: "d", label: "Over PKR 3M" },
    ]
  }
];

function StyleQuiz() {

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (optionId) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/contact?source=quiz_complete');
    }, 2000);
  };

  const currentQuestion = quizSteps[currentStep];
  const progress = ((currentStep) / quizSteps.length) * 100;
  const isAnswered = answers[currentStep] !== undefined;

  return (
    <div className="bg-white min-h-screen pt-24 pb-0 flex flex-col">

      {/* Header */}
      <div className="w-full bg-cream py-6 sticky top-20 z-40 border-b border-stone">
        <div className="max-w-4xl mx-auto px-6">

          <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal">
            <span>Step {currentStep + 1} of {quizSteps.length}</span>
            <button onClick={() => navigate(-1)} className="hover:text-gold transition-colors">
              Exit
            </button>
          </div>

          <div className="w-full h-1 bg-stone rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

        </div>
      </div>

      {/* Quiz */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-6 py-12 lg:py-24">

        {isSubmitting ? (

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">

            <div className="w-16 h-16 border-4 border-stone border-t-gold rounded-full animate-spin mx-auto mb-8"></div>

            <h2 className="font-serif text-3xl text-charcoal mb-4">
              Analyzing Your Style...
            </h2>

            <p className="text-charcoal-light font-light">
              We are curating the perfect aesthetic profile for you.
            </p>

          </motion.div>

        ) : (

          <AnimatePresence mode="wait">

            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal text-center mb-16 max-w-3xl mx-auto">
                {currentQuestion.question}
              </h1>

              {currentQuestion.type === "image" ? (

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {currentQuestion.options.map((option) => (

                    <div
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`cursor-pointer group relative overflow-hidden ring-4 transition-all duration-300 ${
                        answers[currentStep] === option.id
                          ? 'ring-gold scale-[1.02]'
                          : 'ring-transparent hover:ring-stone'
                      }`}
                    >

                      <div className="aspect-square relative">

                        <img
                          src={option.image}
                          alt={option.label}
                          className="w-full h-full object-cover"
                        />

                        <div className={`absolute inset-0 bg-charcoal/20 transition-opacity ${
                          answers[currentStep] === option.id ? 'opacity-0' : 'group-hover:opacity-10'
                        }`} />

                      </div>

                      <div className={`absolute bottom-0 inset-x-0 p-4 bg-white/90 backdrop-blur-sm text-center font-sans text-sm tracking-wide font-medium transition-colors ${
                        answers[currentStep] === option.id ? 'text-gold' : 'text-charcoal'
                      }`}>
                        {option.label}
                      </div>

                    </div>

                  ))}

                </div>

              ) : (

                <div className="flex flex-col gap-4 max-w-2xl mx-auto">

                  {currentQuestion.options.map((option) => (

                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`p-6 text-left border-2 transition-all duration-300 font-sans text-lg ${
                        answers[currentStep] === option.id
                          ? 'border-gold bg-cream text-charcoal shadow-sm'
                          : 'border-stone text-charcoal-light hover:border-gold hover:text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>

                  ))}

                </div>

              )}

            </motion.div>

          </AnimatePresence>

        )}

        {!isSubmitting && (

          <div className="mt-16 w-full max-w-5xl flex justify-between items-center border-t border-stone pt-8">

            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`text-sm uppercase tracking-widest font-semibold transition-colors ${
                currentStep === 0
                  ? 'text-stone-dark cursor-not-allowed opacity-50'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                isAnswered
                  ? 'bg-charcoal text-white hover:bg-gold hover:-translate-y-1 shadow-luxury'
                  : 'bg-stone text-stone-dark cursor-not-allowed'
              }`}
            >
              {currentStep === quizSteps.length - 1 ? 'See Results' : 'Next Step'}
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default StyleQuiz;