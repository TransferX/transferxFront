import { useState, ReactNode } from 'react';

interface MultistepFormProps {
  steps: ReactNode[];
  onFinish: () => void;
  showFinishButton?: boolean;
  onClose: () => void; // Função para fechar o modal
}

const MultistepForm: React.FC<MultistepFormProps> = ({ steps, onFinish, showFinishButton = true, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    if (currentStep === 0) {
      onClose(); // Fechar o modal se estiver na primeira etapa
    } else {
      setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <section className="flex flex-col m-4 md:max-w-[820px]">
      <form>
        {steps[currentStep]}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-vermelho text-white px-6 py-2 rounded-full shadow-md"
          >
            Voltar
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-vermelho text-white px-6 py-2 rounded-full shadow-md"
            >
              Próximo passo
            </button>
          ) : (
            showFinishButton && (
              <button
                type="button"
                onClick={onFinish}
                className="bg-vermelho text-white px-6 py-2 rounded-full shadow-md"
              >
                Finalizar
              </button>
            )
          )}
        </div>
      </form>
    </section>
  );
};

export default MultistepForm;
