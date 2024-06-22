import React from "react";
import Input from "../ui/Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="flex flex-col">
      <Input
        label="E-mail"
        placeholder="Ex: mateus@gmail.com"
        id="email"
        name="email"
        type="email"
      />
      <Input
        label="Senha"
        placeholder="Digite a senha"
        id="senha"
        name="senha"
        type="password"
        className="mb-4"
      />

      <Link href="#" className="text-cinzaClaro text-sm ">
        Esqueceu a senha?
      </Link>

      <button className="bg-vermelho mt-10 p-3 text-branco rounded-2xl font-semibold flex justify-center gap-2 items-center">
        {" "}
        Entrar{" "}
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
        </svg>{" "}
      </button>

      <div className="my-10 flex justify-between">
        <Link href="#" className="text-cinzaClaro text-sm ">
          Não tem uma conta?
        </Link>
        
        <Link href="http://www.localhost:3000/registrar" className="text-cinzaEscuro text-sm font-semibold ">
          Criar uma conta
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
