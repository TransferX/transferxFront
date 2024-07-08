import Link from "next/link";
import Input from "../_components/ui/Input";

// components/Step1.js
const Step1 = () => {
  return (
    <div>
      <h3 className="text-cinzaEscuro font-bold text-md">Informações do Veículo</h3>
      <p className="text-gray-600">Esses serão as informações do veículo, onde você terá posse.</p>

      <div className="md:flex w-full">
        <div className="md:flex-1">
          <Input
            label="Modelo"
            placeholder="Digite o Modelo do Veículo"
            id="modelo"
            name="modelo"
            type="text"
          />
        </div>
       
      </div>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
          <Input
            label="Marca"
            placeholder="Digite a Marca do Veículo"
            id="marca"
            name="marca"
            type="marca"
          />
        </div>
        <div className="md:flex-1">
          <Input
            label="Ano"
            placeholder="Digite o Ano do Veículo"
            id="ano"
            name="ano"
            type="text"
          
          />
        </div>
      </div>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
          <Input
            label="Categoria"
            placeholder="Digite a Categoria do Veículo"
            id="Categoria"
            name="Categoria"
            type="text"
          
          />
        </div>
        <div className="md:flex-1 mb-8">
          <Input
            label="Tipo"
            placeholder="Digite o Tipo do Veículo"
            id="tipoVeiculo"
            name="tipoVeiculo"
            type="text"

          />
        </div>
      </div>
   


  
    </div>
  );
};

export default Step1;

