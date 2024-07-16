"use client";
import React, { useState } from "react";
import Sidebar from "../_components/sidebar/Sidebar";

const Notificacoes = () => {
  const [activeTab, setActiveTab] = useState("sucesso");

  const notificacoes = {
    sucesso: [
      "Notícia Boa! O seu pedido de transferência de propriedade do objeto Drone DJI Mavic 3 Pro foi processado com sucesso.",
      "Transferência concluída! A propriedade do carro Tesla Model S foi atualizada.",
      "Atualização bem-sucedida! O documento do barco Speedster 3000 foi renovado.",
    ],
    falhas: [
      "Falha: O número de chassi do objeto Patinete Monster 2000W Pro não condiz com o número de chassi do formulário.",
      "Erro: O pagamento do seguro do carro Ford Mustang GT não foi processado.",
      "Problema: A documentação do objeto Bicicleta Elétrica Xtreme 7000 está incompleta.",
    ],
    consultas: [
      "Consulta: O número de chassi do objeto Patinete Monster 2000W Pro foi consultado na rua Alferes Poli, em Curitiba.",
      "Verificação: A propriedade do drone Phantom 4 foi consultada no centro de São Paulo.",
      "Análise: A consulta do número de chassi do barco Sea Ray 280 foi feita na marina do Rio de Janeiro.",
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100 ml-0">
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center">
          <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-md">
            <p>🔔 Ative as notificações para saber a localização exata de quem consultou seus objetos</p>
          </div>
          <div className="mb-4 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                className={`${
                  activeTab === "sucesso"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab("sucesso")}
              >
                Sucesso
              </button>
              <button
                className={`${
                  activeTab === "falhas"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab("falhas")}
              >
                Falhas
              </button>
              <button
                className={`${
                  activeTab === "consultas"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab("consultas")}
              >
                Consultas
              </button>
            </nav>
          </div>
          <div>
            {activeTab === "sucesso" && (
              <div>
                {notificacoes.sucesso.map((notificacao, index) => (
                  <div key={index} className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                    {notificacao}
                  </div>
                ))}
              </div>
            )}
            {activeTab === "falhas" && (
              <div>
                {notificacoes.falhas.map((notificacao, index) => (
                  <div key={index} className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                    {notificacao}
                  </div>
                ))}
              </div>
            )}
            {activeTab === "consultas" && (
              <div>
                {notificacoes.consultas.map((notificacao, index) => (
                  <div key={index} className="mb-4 p-4 bg-yellow-100 text-yellow-700 rounded-md">
                    {notificacao}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificacoes;
