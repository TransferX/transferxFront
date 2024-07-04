import Link from "next/link";
import Input from "../_components/ui/Input";

// components/Step1.js
const Step1 = () => {
  return (
    <div>
      <h3 className="mt-6 text-cinzaEscuro font-bold text-xl">Características do Veículo</h3>
      <p className="text-gray-600 max-w-[80%] mb-6 mt-3">Essas serão as características do veículo, onde você terá posse.</p>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
          <Input
            label="Número de Série"
            placeholder="Digite o Número de Série do Veículo"
            id="numeroSerie"
            name="numeroSerie"
            type="text"
            className="py-3"
          />
        </div>
       
      </div>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
          <Input
            label="Condição"
            placeholder="Digite a Condição do Veículo"
            id="condicao"
            name="condicao"
            type="condicao"
             className="py-3"
          />
        </div>
        <div className="md:flex-1">
          <Input
            label="Cor"
            placeholder="Digite a Cor do Veículo"
            id="cor"
            name="cor"
            type="text"
             className="py-3"
          />
        </div>
      </div>

    
  
    </div>
  );
};

export default Step1;

