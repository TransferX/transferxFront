import React from "react";
import { Header } from "../_components/header/Header";
import LoginForm from "../_components/loginForm/page";
import CadastroForm from "../_components/cadastroForm/page";

const Registrar = () => {
  return (
    <>
      <Header />

      <section className="m-4 p-4 border-2 border-bordaFormulario rounded-2xl  lg:container lg:mx-auto lg:max-w-[680px] md:my-14">
        <h2 className=" my-2 font-extrabold text-cinzaMedio text-2xl ">
          Criar uma Conta
        </h2>
        <span className="text-cinzaClaro text-sm mt-5">
        Comece sua jornada TransferX se registrando conosco
        </span>
        <CadastroForm />
      </section>
    </>
  );
};

export default Registrar;
