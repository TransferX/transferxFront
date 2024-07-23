import React from "react";
import Input from "../ui/Input";
import Link from "next/link";

const Step2 = () => {
  return (
    <>
      <h3 className="text-cinzaMedio font-bold">Endereço</h3>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
          <Input
            label="Cidade"
            placeholder="Digite sua Cidade"
            id="cidade"
            name="cidade"
            type="text"
          />
        </div>

        <div className="md:flex-1">
          <Input
            label="Bairro"
            placeholder="PR"
            id="bairro"
            name="bairro"
            type="text"
            className=""
          />
        </div>
      </div>

      <div className="md:flex w-full gap-4 mb-2">
        <div className="md:flex-1">
        <Input
          label="Código Postal"
          placeholder="Código Postal"
          id="codigoPostal"
          name="codigoPostal"
          type="text"
          className=""
        />
        </div>
        <div className="md:flex-1">
          <Input
            label="Número"
            placeholder="Número"
            id="Número"
            name="Número"
            type="text"
            className="w-[100%]"
          />
        </div>

        <div className="md:flex-1">
          <Input
            label="Estado"
            placeholder="PR"
            id="estado"
            name="estado"
            type="text"
            className=""
          />
        </div>
      </div>
      <div className="md:flex-1">
      

<Input
            label="Logradouro"
            placeholder="Digite seu Logradouro"
            id="logradouro"
            name="logradouro"
            type="text"
          />
      </div>

      <div className="flex  gap-2 items-start ">
        <input type="checkbox" name="" id="" className="mt-1" />
        <span className="text-cinzaClaro text-sm text-start">
          Ao criar uma conta, você concorda com nossos Termos e Condições
        </span>
      </div>

      <button className="bg-vermelho mt-10 p-3 text-branco rounded-2xl font-semibold flex justify-center gap-2 items-center w-full">
        Registrar
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

      <div className="my-6 flex gap-3 ">
        <span className="text-cinzaClaro text-sm ">Já tem uma conta?</span>

        <Link
          href="http://www.localhost:3000/entrar"
          className="text-cinzaEscuro text-sm font-semibold "
        >
          Entrar
        </Link>
      </div>
    </>
  );
};

export default Step2;
