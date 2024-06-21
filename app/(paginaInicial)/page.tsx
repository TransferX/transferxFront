import React from "react";
import { Header } from "../_components/_header/Header";
import Image from "next/image";

import volcanoImage from "/public/assets/volcano.png";
import monsterImage from "/public/assets/monster.png";
import patineteImage from "/public/assets/patineteImage.png";
import veiculoIcone from "/public/assets/veiculoicon.svg";
import documentoIcone from "/public/assets/documentoIcon.svg";
import concluirIcone from "/public/assets/concluirIcon.svg";
import Link from "next/link";

const HomeTeste = () => {
  return (
    <>
      <Header />

      <section className="mt-40 flex items-center  justify-between gap-12 container mx-auto ">
        <div className="w-[50%]">
          <h1 className="text-cinzaMedio font-bold text-6xl">
            Da sua posse, para a do
            <span className="text-vermelho"> Mundo Inteiro!</span>
          </h1>
          <p className="text-cinzaMedio mt-9">
            Descubra a liberdade de transferir a posse de sua bicicleta,
            patinete elétrico, scooter e outros dispositivos de mobilidade
            urbana e elétrica de forma fácil e segura. Com o selo QR Code da
            TransferX, tenha controle total e receba notificações sempre que seu
            veículo for consultado.
          </p>

          <div className="mt-9 flex">
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
              <div className="flex items-center gap-2">Saber mais <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</div>
            </Link>
          </div>
        </div>

        {/* Bicicleta */}
        <div>
          <Image
            className="bg-gradient-to-r from-white to-red-500"
            src={volcanoImage}
            alt="Bicicleta Full Suspension"
          />
        </div>
      </section>

      {/* Como Transferir */}
      <section className="bg-branco  mt-40">
        <div className="container mx-auto  flex items-center flex-col">
          <span className="mt-9 text-cinzaMedio">Como Transferir?</span>
          <h2 className=" mt-2 font-extrabold text-cinzaMedio text-3xl">
            Transfira seu veículo em 3 etapas
          </h2>

          {/* Passos */}

          <div className="flex gap-52 my-9">
            <div className=" flex flex-col items-center">
              <div className="bg-white w-[129px] h-[129px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={veiculoIcone} alt="Icone Carro" />
              </div>
              <h4 className="text-xl">Escolher Veículo</h4>
              <span className="w-64 text-center text-cinzaMedio">
                Crie uma conta e faça uma solicitação de transferência
              </span>
            </div>

            <div className=" flex flex-col items-center">
              <div className="bg-vermelho w-[129px] h-[129px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={documentoIcone} alt="Icone Carro" />
              </div>{" "}
              <h4 className="text-xl">Preencher Formulários</h4>
              <span className="w-64 text-center text-cinzaMedio">
                Depois que o proprietário aceitar a solicitação, preencha os
                formulários para transferência
              </span>
            </div>

            <div className=" flex flex-col items-center">
              <div className="bg-white w-[129px] h-[129px] mb-7 rounded-3xl flex items-center justify-center">
                <Image src={concluirIcone} alt="Icone Carro" />
              </div>{" "}
              <h4 className="text-xl">Concluir a Transferência</h4>
              <span className="w-64 text-center text-cinzaMedio">
                Verificaremos seus dados e concluiremos a transferência de
                propriedade.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Explicação */}
      <section className="container mx-auto mt-20 ">
        <div className="flex justify-evenly">
          <div className="max-w-[40%]  mt-9">
            <p>
              Simplifique a transferência de propriedade de patinetes,
              bicicletas e scooters
            </p>
            <h2 className=" mt-2 font-extrabold text-cinzaMedio text-4xl">
              Simplificando o processo de transferências
            </h2>
            <p className="mt-9">
              Nossa plataforma oferece uma solução descomplicada para a
              transferência de propriedade de patinetes, bicicletas e scooters.
              Tornamos todo o processo eficiente e simples, proporcionando uma
              experiência tranquila e segura para nossos usuários.
            </p>
            <div className="mt-9 ">
              <Link
                className="font-semibold bg-cinzaEscuro text-white py-3.5 px-5 rounded-xl"
                href="#"
              >
                Mais Detalhes
              </Link>
            </div>
          </div>

          {/* Image 1 */}
          <div>
            <Image src={monsterImage} alt="Patinete Elétrico" />
          </div>
        </div>

        <div className="flex justify-evenly">
          {/*  DOISSSS */}

          {/* Image 1 */}
          <div className="mt-[-90px]">
            <Image src={patineteImage} alt="Patinete Elétrico" />
          </div>

          <div className="max-w-[45%] mt-9">
            <p>
              Simplifique o processo de transferência de propriedade do seu
              veículo de mobilidade
            </p>
            <h2 className=" mt-2 font-extrabold text-cinzaMedio text-4xl">
              Transferências Sem Multas!
            </h2>
            <p className="mt-9">
              Aqui, transferir a propriedade do seu veículo é tão fácil quanto
              alguns cliques. Livre-se das complicações do Detran, sem multas,
              sem vistorias, sem estresse.
            </p>
            <div className="mt-9 ">
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

      <section className="container mx-auto mt-40 flex justify-center ">
        <div className="w-[1160px] bg-gradient-to-r from-black/35 to-cinzaEscuro rounded-2xl p-12 ">
          <div className="flex justify-between mt-9">
            <h2 className=" mt-2 font-extrabold text-white text-4xl">
              Facilite a sua vida com nossos serviços
            </h2>

            <h2 className=" text-3xl text-cinzaClaro font-extrabold">
              TransferX
            </h2>
          </div>

          <p className="mt-3 text-white max-w-[40%]">
            Opte por uma transferência mais rápida e fácil, economizando tempo e
            esforço.
          </p>
          <div className="mt-9">
            <Link
              className="font-bold bg-vermelho text-white py-3.5 px-5 rounded-xl"
              href="#"
            >
              Transferir Agora
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-9 flex items-center border-b-2 border-cinzaClaro  ">
        <div className="container mx-auto  w-[1160px] flex justify-between items-center mb-9 ">
          <h2 className=" text-3xl text-cinzaMedio font-extrabold">
            TransferX
          </h2>

          <div>
            <span className="text-bold text-cinzaMedio">
              Av. T-7, 371 - St. Oeste, Goiânia - GO, 74140-110
            </span>
          </div>

          <div className="flex gap-3">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>(41) 98774-2206</span>
          </div>

          <div>
            <span className="text-cinzaMedio font-black">
              <Link href="https://www.instagram.com/atransferx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  fontWeight={900}
             
                  fill="#313131"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </Link>
            </span>

            <div className="mt-2"></div>
          </div>
        </div>
      </footer>

      <div className="container mx-auto flex items-center justify-center my-9">
      Copyright 2024 © TransferX, All Rights Reserved.
      </div>
    </>
  );
};

export default HomeTeste;
