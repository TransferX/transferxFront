import { useState, ReactNode } from 'react';

interface MultistepFormProps {
  steps: ReactNode[];
}

const MultistepForm: React.FC<MultistepFormProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className='flex flex-col m-4  md:max-w-[820px]   '>
 
    
   
      <form>
        {steps[currentStep]}
        <div className="flex justify-between mt-4 ">
          <button
            type="button"
            onClick={prevStep}
            className={` bg-vermelho
            } text-white px-6 py-2 rounded-full shadow-md`}
            disabled={currentStep === 0}
            >
            Voltar
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-vermelho text-white px-6 py-2 rounded-full shadow-md"
            >
            Próximo passo
          </button>
        </div>
      </form>

 
            </section>
  );
};

export default MultistepForm;
