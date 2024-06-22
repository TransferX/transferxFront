import React from "react";
import { Header } from "../_components/header/Header";
import LoginForm from "../_components/loginForm/page";

const Entrar = () => {
  return (
    <>
      <Header />

      <section className="m-4 p-4 border-2 border-bordaFormulario rounded-2xl  lg:container lg:mx-auto lg:max-w-[500px] md:my-14">
        <h2 className=" mt-2 font-extrabold text-cinzaMedio text-2xl ">
          Bem Vindo
        </h2>
        <span className="text-cinzaClaro text-sm">
          Por favor, digite seu endereço de e-mail e senha
        </span>
        <LoginForm />
      </section>
    </>
  );
};

export default Entrar;