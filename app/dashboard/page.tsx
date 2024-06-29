import React from "react";
import Sidebar from "../_components/sidebar/Sidebar";
import Input from "../_components/ui/Input";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-20 px-4 pt-8 flex-1 xl:ml-0 ">
        <section className="bg-branco/80 rounded-2xl p-4 md:h-[50%] xl:h-auto ">
          <h3 className="font-black text-cinzaClaro py-3">Meus Veículos</h3>
          <div className="flex items-start flex-col lg:items-center">
            <h3 className="font-extrabold text-4xl text-cinzaClaro mt-6">OPS...</h3>
            <span className="text-bold text-sm text-cinzaClaro text-start mt-6 md:text-lg">
              Parece que você não tem nenhum veículo registrado em nossa
              plataforma, vamos adicionar o primeiro?
            </span>
            <button className="bg-verdeSucesso my-6 p-3 text-branco rounded-2xl  font-semibold flex justify-center gap-2 items-center">
              Adicionar Veículo
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
          </div>
        </section>

        <section className="shadow-lg rounded-2xl p-4 my-8 border border-bordaFormulario lg:mb-14 ">
          <div className="flex flex-col justify-between lg:flex-row items-start lg:items-center">
            <span className="text-bold text-sm text-cinzaClaro text-start lg:text-lg lg:max-w-[40%] xl:max-w-[50%] ">
              Insira o ID do veículo para iniciar o processo de transferência
              para sua propriedade. Após a inserção, o proprietário avaliará sua
              solicitação.
            </span>
            <div className="flex flex-col md:flex-row md:gap-3 items-start justify-center lg:items-center">
              <Input
                label="ID do Veículo"
                placeholder="ID do Veículo"
                id="idVeiculo"
                name="idVeiculo"
                type="text"
              />
              <button className="bg-verdeSucesso md:mt-6 p-3 text-branco rounded-2xl font-semibold flex justify-center gap-2 items-center">
                Solicitar transferência
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
            </div>
          </div>
        </section>

        <section className="bg-branco/80 rounded-2xl md:h-[40%] p-4 pb-12 mb-8 flex flex-col justify-between mt-8  xl:h-auto ">
          <h3 className="font-black text-cinzaClaro pt-4 self-start">
            Solicitações de Transferências
          </h3>
          <div className="flex-1 flex items-start justify-center md:items-center">
            <span className="text-bold text-sm text-cinzaClaro text-start mt-6 md:text-center md:max-w-[90%] md:text-lg">
              No momento, você não possui nenhuma solicitação de transferência
              pendente. Quando um comprador solicitar a transferência de um dos
              seus veículos, você poderá aprovar ou negar a solicitação aqui.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
