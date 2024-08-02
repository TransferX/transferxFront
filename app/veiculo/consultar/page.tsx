"use client"
import { useState } from "react";
import Sidebar from "../../_components/sidebar/Sidebar";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";

const ConsultarObjeto = () => {
  const [idOuChassi, setIdOuChassi] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidation = () => {
    // Lógica de validação será implementada posteriormente
    setIsValid(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 mt-16 lg:mt-0 sm:p-10 lg:p-12 bg-gray-100 flex justify-center">
        <section className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
          <header className="flex items-center justify-between mb-10 border-b pb-5">
            <div className="flex items-center">
              <AiOutlineFileDone className="text-red-500 text-4xl rounded cursor-pointer mr-2" />
              <h1 className="text-2xl text-cinzaEscuro font-extrabold">TransferX</h1>
            </div>
            <div className="w-20 h-20">
              <BsQrCodeScan className="text-4xl text-gray-700" />
            </div>
          </header>

          <h2 className="text-center text-2xl font-bold mb-8">Validação de Selo</h2>

          <div className="mb-8">
            <label htmlFor="idOuChassi" className="block text-lg font-semibold mb-4">
              Insira o ID do veículo ou número do chassi:
            </label>
            <div className="flex justify-center items-center">
              <input
                type="text"
                id="idOuChassi"
                value={idOuChassi}
                onChange={(e) => setIdOuChassi(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-500 w-2/3"
              />
              <button
                onClick={handleValidation}
                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all ml-4"
              >
                Validar
              </button>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>

          {isValid && (
            <div className="text-center text-green-600 text-lg font-semibold">
              Selo válido! O veículo está devidamente registrado.
            </div>
          )}

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Ou escaneie o QR Code:</h3>
            <div className="border border-gray-300 p-5 rounded-lg flex justify-center items-center">
              <BsQrCodeScan className="text-6xl text-gray-700" />
              <p className="text-gray-600 ml-4">Posicione o QR code na frente da câmera para escanear.</p>
            </div>
          </div>

          <div className="mt-10">
            <img src="https://via.placeholder.com/400x300" alt="Imagem ilustrativa" className="mx-auto mb-8 rounded-lg shadow-md"/>
            <p className="text-gray-600 text-center">
              O certificado de posse do veículo é um documento importante que garante a propriedade legal do veículo. 
              Certifique-se de que todas as informações estão corretas antes de prosseguir com a validação.
            </p>
            <p className="text-gray-600 text-center mt-4">
              Se você tiver qualquer dúvida ou problema, entre em contato com nosso suporte técnico pelo email 
              <span className="text-blue-600 font-semibold"> suporte@transferx.com</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultarObjeto;
