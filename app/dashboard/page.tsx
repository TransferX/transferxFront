"use client";
import React, { useState } from "react";
import Sidebar from "../_components/sidebar/Sidebar";
import Input from "../_components/ui/Input";
import Modal from "../_components/ui/Modal";
import MultistepForm from "../_components/forms/MultistepForm";
import PersonalDataStep from "../_components/forms/registerUserForm/PersonalDetailsStep";
import AddressDataStep from "../_components/forms/registerUserForm/AddressDetailsStep";
import ObjectDetailsStep from "../_components/forms/addObjectForm/objectDetailsStep";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFinish = () => {
    console.log("as");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-100">
        <div className="flex-1 grid grid-cols-1 gap-8">
          <section className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center">
            <h3 className="font-bold text-gray-700 mb-4">Meus Veículos</h3>
            <div className="text-center">
              <h3 className="font-extrabold text-2xl text-gray-700">OPS...</h3>
              <p className="mt-4 text-gray-600">
                Parece que você não tem nenhum veículo registrado em nossa plataforma, vamos adicionar o primeiro?
              </p>
              <button
                onClick={handleOpenModal}
                className="bg-green-500 text-white mt-6 px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center mx-auto"
              >
                <a href="/veiculo/adicionar">
                  Adicionar Veículo
                  </a>
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

          <section className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <span className="text-gray-700 lg:max-w-4xl mb-4 lg:mb-0 text-center lg:text-left">
                Insira o ID do veículo para iniciar o processo de transferência para sua propriedade. Após a inserção, o proprietário avaliará sua solicitação.
              </span>
              <div className="flex flex-col md:flex-row items-center">
                <Input placeholder="ID do Veículo" id="idVeiculo" name="idVeiculo" type="text" />
                <button className="bg-green-500 text-white md:mt-0 md:ml-4 p-2 rounded-lg hover:bg-green-600 flex items-center">
                  Solicitar
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

          <section className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center">
            <h3 className="font-bold text-gray-700 mb-4">Solicitações de Transferências</h3>
            <div className="text-center">
              <p className="text-gray-600">
                No momento, você não possui nenhuma solicitação de transferência pendente. Quando um comprador solicitar a transferência de um dos seus veículos, você poderá aprovar ou negar a solicitação aqui.
              </p>
            </div>
          </section>
        </div>

       
      </div>
    </div>
  );
};

export default Dashboard;
