"use client"
import { AiOutlineFileDone } from "react-icons/ai";
import Sidebar from "../../_components/sidebar/Sidebar";

const CertificadoDePosse = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 mt-16 lg:mt-0 sm:p-10 lg:p-12 bg-gray-100 flex justify-center">
        <section className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
          <header className="flex items-center justify-between mb-10 border-b pb-5">
            <div>
              <div className="flex items-center">
                <AiOutlineFileDone className="text-red-500 text-4xl rounded cursor-pointer mr-2" />
                <h1 className="text-2xl text-cinzaEscuro font-extrabold">TransferX</h1>
              </div>
              <span className="text-sm text-green-600">Certificado de Posse Validado pelo Sistema</span>
            </div>
            <div className="w-20 h-20">
              <img src="https://hexdocs.pm/qr_code/docs/qrcode.svg" alt="QR Code para verificação" />
            </div>
          </header>

          <h2 className="text-center text-2xl font-bold mb-8">Certificado de Posse</h2>

          <div className="text-center text-xl font-semibold mb-8">
            ID do Veículo: <span className="font-bold text-2xl">[ID do Veículo]</span>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Informações do Proprietário</h3>
            <p className="leading-relaxed">
              Eu, <span className="font-bold">[Nome Completo do Dono Atual]</span>, portador do CPF <span className="font-bold">[CPF do Dono Atual]</span>,
              residente na <span className="font-bold">[Endereço do Dono Atual]</span>, com email <span className="font-bold">[Email do Dono Atual]</span> e telefone
              <span className="font-bold">[Telefone do Dono Atual]</span>, sou o legítimo proprietário do veículo modelo <span className="font-bold">[Modelo]</span>,
              com número de série <span className="font-bold">[Número de Série]</span>, cujas características e modificações estão detalhadas a seguir:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Características do Veículo</h3>
              <p>Marca: <span className="font-bold">[Marca]</span></p>
              <p>Modelo: <span className="font-bold">[Modelo]</span></p>
              <p>Número de Série: <span className="font-bold">[Número de Série]</span></p>
              <p>Tipo: <span className="font-bold">[Tipo]</span></p>
              <p>Ano: <span className="font-bold">[Ano]</span></p>
              <p>Cor: <span className="font-bold">[Cor]</span></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Modificações no Veículo</h3>
              <p>Freio: <span className="font-bold">[Modificação]</span></p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Informações do Antigo Proprietário</h3>
            <p className="leading-relaxed">
              Eu, <span className="font-bold">[Nome Completo do Penúltimo Dono]</span>, com email <span className="font-bold">[Email do Penúltimo Dono]</span> e telefone
              <span className="font-bold">[Telefone do Penúltimo Dono]</span>, declaro para os devidos fins que transferi o veículo de minha propriedade para o atual
              proprietário, <span className="font-bold">[Nome Completo do Atual Dono]</span>, portador do CPF <span className="font-bold">[CPF do Atual Dono]</span>,
              mediante a realização do devido processo legal de transferência de propriedade.
            </p>
          </div>

          <div className="flex justify-between mb-8">
            <div className="text-center">
              <p className="font-bold">_____________________________</p>
              <p>Assinatura do Antigo Proprietário</p>
            </div>
            <div className="text-center">
              <p className="font-bold">_____________________________</p>
              <p>Assinatura do Atual Proprietário</p>
            </div>
          </div>

          <footer className="flex justify-around mt-10">
          <button className="bg-cinzaClaro text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all">
              Voltar
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all">
              Baixar PDF
            </button>
          </footer>
        </section>
      </div>
    </div>
  )
}

export default CertificadoDePosse
