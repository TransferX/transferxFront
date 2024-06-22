import React from "react";
import { Header } from "../_components/header/Header";
import Image from "next/image";

import volcanoImage from "/public/assets/volcano.png";
import instagramSvg from "/public/assets/instagram.svg";
import monsterImage from "/public/assets/monster.png";
import patineteImage from "/public/assets/patineteImage.png";
import veiculoIcone from "/public/assets/veiculoIcon.svg";
import documentoIcone from "/public/assets/documentoIcon.svg";
import concluirIcone from "/public/assets/concluirIcon.svg";
import Link from "next/link";

const HomeTeste = () => {
  return (
    <>
      <Header />

      <section className="flex flex-col items-center p-4 md:container md:mx-auto md:p-0 md:mt-14 lg:flex-row lg:justify-between lg:container lg:mx-auto lg:items-start xl:gap-24 ">
        <div className="lg:max-w-[50%] lg:p-4">
          <h1 className="text-cinzaMedio font-bold text-4xl md:text-5xl xl:text-6xl">
            Da sua posse, para a do
            <span className="text-vermelho"> Mundo Inteiro!</span>
          </h1>
          <p className="text-cinzaMedio mt-4 xl:text-lg ">
            Descubra a liberdade de transferir a posse de sua bicicleta,
            patinete elétrico, scooter e outros dispositivos de mobilidade
            urbana e elétrica de forma fácil e segura. Com o selo QR Code da
            TransferX, tenha controle total e receba notificações sempre que seu
            veículo for consultado.
          </p>

          <div className="my-8 flex">
            <Link
              className="font-bold bg-vermelho text-white py-3.5 px-5 rounded-xl"
              href="#"
            >
              Transferir Agora
            </Link>
            <Link
              className="font-bold bg-transparent text-cinzaMedio py-3.5 px-5 rounded-md"
              href="#"
            >
              <div className="flex items-center gap-2">
                Saber mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Bicicleta */}
        <div className="bg-gradient-to-r from-white to-red-500">
          <Image src={volcanoImage} alt="Bicicleta Full Suspension" />
        </div>
      </section>

      {/* Como Transferir */}
      <section className="bg-branco mt-14 p-4 ">
        <div className="flex items-center flex-col">
          <span className="mt-4 text-cinzaMedio">Como Transferir?</span>
          <h2 className=" mt-2 font-extrabold text-cinzaMedio text-1xl text-center">
            Transfira seu veículo em 3 etapas
          </h2>

          {/* Passos */}

          <div className="flex gap-20 xl:gap-52 my-9 flex-col lg:flex-row">
            <div className=" flex flex-col items-center">
              <div className="bg-white w-[140px] h-[140px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={veiculoIcone} alt="Icone Carro" />
              </div>
              <h4 className="text-xl">Escolher Veículo</h4>
              <span className="w-72 lg:w-64 text-center text-cinzaMedio">
                Crie uma conta e faça uma solicitação de transferência
              </span>
            </div>

            <div className=" flex flex-col items-center">
              <div className="bg-vermelho w-[140px] h-[140px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={documentoIcone} alt="Icone Carro" />
              </div>{" "}
              <h4 className="text-xl">Preencher Formulários</h4>
              <span className="w-72 lg:w-64 text-center text-cinzaMedio">
                Depois que o proprietário aceitar a solicitação, preencha os
                formulários para transferência
              </span>
            </div>

            <div className=" flex flex-col items-center">
              <div className="bg-white w-[140px] h-[140px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={concluirIcone} alt="Icone Carro" />
              </div>{" "}
              <h4 className="text-xl">Concluir a Transferência</h4>
              <span className="w-72 lg:w-64 text-center text-cinzaMedio">
                Verificaremos seus dados e concluiremos a transferência de
                propriedade.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Explicação */}
      <section className="mt-14 p-4 container mx-auto">
        <div className="flex flex-col lg:justify-between md:flex-row justify-between items-center ">
          <div className="md:max-w-[60%] xl:mt-[-150px] ">
            <p className="text-cinzaMedio text-md lg:text-lg">
              Simplifique a transferência de propriedade de patinetes,
              bicicletas e scooters
            </p>
            <h2 className=" mt-2 font-extrabold text-cinzaMedio text-2xl lg:text-4xl">
              Simplificando o processo de transferências
            </h2>
            <p className="mt-6 text-cinzaMedio text-md lg:text-lg ">
              Nossa plataforma oferece uma solução descomplicada para a
              transferência de propriedade de patinetes, bicicletas e scooters.
              Tornamos todo o processo eficiente e simples, proporcionando uma
              experiência tranquila e segura para nossos usuários.
            </p>
            <div className="mt-14 ">
              <Link
                className="font-semibold bg-cinzaEscuro text-white py-3.5 px-5 rounded-xl"
                href="#"
              >
                Mais Detalhes
              </Link>
            </div>
          </div>

          {/* Image 1 */}
          <div className="mt-10 md:mt-[-20px] md:max-w-[30%]">
            <Image src={monsterImage} alt="Patinete Elétrico" />
          </div>
        </div>

        {/* Parte doiis */}

        <div className="flex flex-col-reverse lg:justify-between md:flex-row justify-between items-center xl:mt-16 ">
          <div className=" md:mt-[-20px] md:max-w-[30%] xl:max-w-[30%] xl:items-center xl:mt-[-30px]">
            <Image src={patineteImage} alt="Scooter Elétrico" />
          </div>
          <div className="md:max-w-[60%] xl:mt-[-150px]  ">
            <p className="text-cinzaMedio text-md md:text-end lg:text-lg">
              Simplifique a transferência de propriedade de patinetes,
              bicicletas e scooters
            </p>
            <h2 className=" mt-2 font-extrabold text-cinzaMedio text-2xl md:text-end lg:text-4xl">
              Simplificando o processo de transferências
            </h2>
            <p className="mt-6 text-cinzaMedio text-md  md:text-end lg:text-lg">
              Nossa plataforma oferece uma solução descomplicada para a
              transferência de propriedade de patinetes, bicicletas e scooters.
              Tornamos todo o processo eficiente e simples, proporcionando uma
              experiência tranquila e segura para nossos usuários.
            </p>
            <div className="my-14 md:text-end">
              <Link
                className="font-semibold bg-cinzaEscuro text-white py-3.5 px-5 rounded-xl"
                href="#"
              >
                Mais Detalhes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 p-2 xl:container xl:mx-auto">
        <div className="bg-gradient-to-r from-black/35 to-cinzaEscuro rounded-2xl  p-4">
          <div className=" flex justify-between">
            <h2 className="mt-2 font-extrabold text-white text-2xl lg:text-4xl">
              Facilite a sua vida com nossos serviços
            </h2>

            <h2 className="hidden xl:flex text-3xl text-cinzaMedio font-extrabold">
              TransferX
            </h2>
          </div>

          <p className="mt-4 text-white lg:text-lg">
            Opte por uma transferência mais rápida e fácil, economizando tempo e
            esforço.
          </p>
          <div className="my-9">
            <Link
              className="font-bold bg-vermelho text-white py-3.5 px-5 rounded-xl"
              href="#"
            >
              Transferir Agora
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-14 p-4 lg:px-4 lg:py-0 lg:mt-8 lg:container lg:mx-auto items-center">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between xlitems-center">
          <h2 className=" text-3xl text-cinzaMedio font-extrabold">
            TransferX
          </h2>

          <div>
            <span className="text-bold text-cinzaMedio">
              Av. T-7, 371 - St. Oeste, Goiânia
            </span>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="text-bold text-cinzaMedio">(41) 98774-2206</span>
          </div>

          <div className="flex items-center gap-3 text-cinzaEscuro">
            <Link href="https://www.instagram.com/atransferx">
              <Image width={20} src={instagramSvg} alt="Instagram Logo" />
            </Link>
            <span className="text-bold text-cinzaMedio">@atransferx</span>
          </div>
        </div>
      </footer>

      <div className="container mx-auto flex items-center justify-center mt-8 mb-2 text-cinzaClaro border-t-2 border-gray/30">
        Copyright 2024 © TransferX, All Rights Reserved.
      </div>
    </>
  );
};

export default HomeTeste;
