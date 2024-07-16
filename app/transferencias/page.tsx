"use client";
import Sidebar from "../_components/sidebar/Sidebar";
import React from "react";

const Transferencias = () => {
  // Dados de exemplo
  const dados = [
    { id: 1, tipo: "Carro", data: "2023-07-15", status: "Completo", valor: "R$ 50.000", acoes: "Mais detalhes" },
    { id: 2, tipo: "Moto", data: "2023-06-10", status: "Pendente", valor: "R$ 10.000", acoes: "Mais detalhes" },
    // Adicione mais linhas conforme necessário
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100 ml-0 ">
        <div className="flex-1 grid grid-cols-1 gap-8">
          <section className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-center">
            <h3 className="font-bold text-gray-700 mb-4  ">Histórico de Transferências</h3>
            <div className="overflow-x-auto ">
              <table className="min-w-full divide-y  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID do veículo
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Valor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dados.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tipo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.data}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.status === 'Completo' ? 'text-green-500' : 'text-yellow-500'}`}>{item.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.valor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 cursor-pointer">{item.acoes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Transferencias;
