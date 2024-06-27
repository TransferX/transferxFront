import Link from "next/link";
import React, { Fragment } from "react";

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export const HeaderApp = () => {
  return (
    <Popover className="flex items-center h-24 p-4 sm:mx-auto sm:container">
      <h1 className=" text-2xl text-cinzaMedio font-extrabold">TransferX</h1>
      <div className="grow ">
        <div className=" hidden sm:flex items-center justify-center gap-2 md:gap-8 text-cinzaMedio font-bold ">
          <Link href="#">Como Transferir</Link>
          <Link href="#">Para Empresas</Link>
          <Link href="#">Contato</Link>
        </div>
      </div>

      <div className="flex grow items-center justify-end sm:hidden">
        <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-cinzaMedio hover:bg-cinzaEscuro hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vermelho">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
        </PopoverButton>
      </div>

<PopoverOverlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

      <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

      <PopoverPanel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden "
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1 className=" text-3xl text-cinzaMedio font-extrabold">TransferX</h1>

              <div className="mr-2">
                <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-cinzaMedio hover:bg-cinzaEscuro hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vermelho">
                  <span className="sr-only">Fechar menu</span>
                  <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6 ">
              <nav className="grid gap-y-8">
                <Link
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                >
                  Como Transferir
                </Link>
                <Link
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                >
                  Para Empresas
                </Link>
                <Link
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                >
                  Contato
                </Link>
              </nav>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <Link
                href="#"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                Entrar
              </Link>
              <Link
                href="#"
                className="rounded-md bg-vermelho px-4 py-2 text-sm font-medium text-white md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                Registrar
              </Link>
            </div>
          </div>
        </div>
       
      </PopoverPanel>
      </Transition>
      <div className="hidden sm:block">
        <Link className="mr-2 font-bold " href="http://www.localhost:3000/entrar">
          Entrar
        </Link>
        <Link className="font-bold bg-vermelho text-white py-2.5 px-3.5 rounded-md" href="http://www.localhost:3000/registrar">
          Registrar
        </Link>
      </div>
    </Popover>
  );
};
