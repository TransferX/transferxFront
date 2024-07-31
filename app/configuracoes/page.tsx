"use client"
import Sidebar from "../_components/sidebar/Sidebar";
import Input from "../_components/ui/Input";

const Configuracoes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 mt-16 lg:mt-0 sm:p-6 lg:p-8 bg-gray-100">
        <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="mb-4 font-extrabold text-gray-700 text-2xl">
            Perfil
          </h2>
          <span className="text-gray-500 text-sm mb-6 block">
            Edite suas informações pessoais ou altere sua senha
          </span>

          <h6 className="font-extrabold text-gray-700 text-xl mb-4">
            Informações Pessoais
          </h6>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Nome"
              placeholder="Digite seu Nome Completo"
              id="nome"
              name="nome"
              type="text"
            />
            <Input
              label="E-mail"
              placeholder="Digite seu E-mail"
              id="email"
              name="email"
              type="email"
            />
            <Input
              label="CPF"
              placeholder="Digite seu CPF"
              id="cpf"
              name="cpf"
              type="text"
            />

            <h6 className="font-extrabold text-gray-700 text-xl col-span-full mt-6 mb-4">
              Dados do Endereço
            </h6>

            <Input
              label="Logradouro"
              placeholder="Digite seu logradouro"
              id="logradouro"
              name="logradouro"
              type="text"
            />
            <Input
              label="Número"
              placeholder="Número do Logradouro"
              id="numero"
              name="numero"
              type="text"
            />
            <Input
              label="Complemento"
              placeholder="Complemento do Logradouro"
              id="complemento"
              name="complemento"
              type="text"
            />
            <Input
              label="Código Postal"
              placeholder="Digite seu Código Postal"
              id="codigoPostal"
              name="codigoPostal"
              type="text"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 col-span-full">
              <Input
                label="Bairro"
                placeholder="Digite seu Bairro"
                id="bairro"
                name="bairro"
                type="text"
              />
              <Input
                label="Cidade"
                placeholder="Digite sua Cidade"
                id="cidade"
                name="cidade"
                type="text"
              />
              <Input
                label="Estado"
                placeholder="Digite o Estado"
                id="estado"
                name="estado"
                type="text"
              />
            </div>

            <div className="col-span-full flex justify-end space-x-4 mt-6">
              <button
                type="button"
                className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Salvar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Configuracoes
