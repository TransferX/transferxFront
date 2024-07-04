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
    <section className='flex flex-col'>
    <div className='text-center flex items-center flex-col'>

        <h1 className="text-3xl font-bold">Cadastro</h1>
        <p className="text-gray-600 max-w-[80%] mt-4 mb-6">Por favor, preencha o formulário abaixo para realizar o cadastro do seu veículo na TransferX.</p>
        </div>
    <div className="max-w-6xl w-full mx-auto p-8  shadow-2xl rounded-[34px]">
    
      <div className="pb-8 flex flex-row justify-evenly border-b-2 border-branco ">
        {steps.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                currentStep === index ? 'bg-vermelho text-white' : 'bg-branco'
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2  ${currentStep > index ? 'bg-vermelho' : 'bg-gray-300'}`}></div>
            )}
          </div>
        ))}
      </div>
      <form>
        {steps[currentStep]}
        <div className="flex justify-between mt-8 ">
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
    </div>
 
            </section>
  );
};

export default MultistepForm;
