import Link from "next/link";
import Input from "../_components/ui/Input";

// components/Step1.js
const Step1 = () => {
  return (
    <div>
      <h3 className="mt-6 text-cinzaEscuro font-bold text-xl">Informações Adicionais e Anexos</h3>
      <p className="text-gray-600 max-w-[80%] mb-6 mt-3">Essas serão as informações adicionais do veículo, onde você terá posse.</p>


        <div className="flex flex-col">
          <label className='text-cinzaMedio font-bold text-md '>Observações</label>
          <textarea
            className="border boreder-branco rounded-xl p-2 resize-none mt-1"
            placeholder="Digite alguma Observação do Veículo"
            id="observacao"
            name="observacao"
          />
        </div>

        <button className="bg-vermelho mt-10 p-3 text-branco rounded-2xl font-semibold flex justify-center gap-2 items-center">
        Adicionar Anexo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      
      <div className=" my-4">

      <label className='text-cinzaMedio font-bold text-md  '>Observações</label>
      <p className="text-cinzaClaro">Comprovante Pix</p>
      <p className="text-cinzaClaro">Nota Fiscal</p>
      </div>

    

   


  
    </div>
  );
};

export default Step1;

