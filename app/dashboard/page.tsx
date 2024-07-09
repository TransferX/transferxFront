"use client";
import React, { useState } from "react";
import Sidebar from "../_components/sidebar/Sidebar";
import Step1 from "../FormAddObjeto/step1";
import Step2 from "../FormAddObjeto/step2";
import Step3 from "../FormAddObjeto/step3";
import Step4 from "../FormAddObjeto/step4";
import Input from "../_components/ui/Input";
import Modal from "../_components/ui/Modal";
import MultistepForm from "../FormAddObjeto/MultistepForm";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const steps = [
    <Step1 key="step1" />,
    <Step2 key="step2" />,
    <Step3 key="step3" />,
    <Step4 key="step4" />
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100 ml-0 ">
        <div className="flex-1 grid grid-cols-1 gap-8">
          <section className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="font-bold text-gray-700 mb-4">Meus Veículos</h3>
            <div className="text-center">
              <h3 className="font-extrabold text-2xl text-gray-700">OPS...</h3>
              <p className="mt-4 text-gray-600">
                Parece que você não tem nenhum veículo registrado em nossa
                plataforma, vamos adicionar o primeiro?
              </p>
              <button
                className="bg-green-500 text-white mt-6 px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center mx-auto"
                onClick={handleOpenModal}
              >
                Adicionar Veículo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <span className="text-gray-700 lg:max-w-md mb-4 lg:mb-0 text-center lg:text-left ">
                Insira o ID do veículo para iniciar o processo de transferência
                para sua propriedade. Após a inserção, o proprietário avaliará
                sua solicitação.
              </span>
              <div className="flex flex-col md:flex-row items-center">
                <Input
                  placeholder="ID do Veículo"
                  id="idVeiculo"
                  name="idVeiculo"
                  type="text"
              
                />

                <button className="bg-green-500 text-white  md:mt-0 md:ml-4 p-2 rounded-lg hover:bg-green-600 flex items-center ">
                  Solicitar transferência
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="font-bold text-gray-700 mb-4">
              Solicitações de Transferências
            </h3>
            <div className="text-center">
              <p className="text-gray-600">
                No momento, você não possui nenhuma solicitação de transferência
                pendente. Quando um comprador solicitar a transferência de um
                dos seus veículos, você poderá aprovar ou negar a solicitação
                aqui.
              </p>
            </div>
          </section>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <MultistepForm steps={steps} />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
