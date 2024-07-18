"use client"
import Sidebar from "../_components/sidebar/Sidebar";

const Configuracoes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100 ml-0">
  Configurações
    </div>
    </div>
  )
}

export default Configuracoes