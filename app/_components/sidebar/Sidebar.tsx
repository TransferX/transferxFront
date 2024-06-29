"use client"
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import {
  BiTransfer,
  BiSolidDashboard,
  BiQrScan,
  BiBell,
  BiWrench,
  BiHelpCircle,
  BiExit,
} from "react-icons/bi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <BiSolidDashboard /> },
    { title: "Transferências", icon: <BiTransfer /> },
    { title: "Validar Selo", icon: <BiQrScan /> },
    { title: "Notificações", icon: <BiBell /> },
    { title: "Configurações", icon: <BiWrench /> },
    { title: "Ajuda", icon: <BiHelpCircle /> },
    { title: "Sair", icon: <BiExit /> },
  ];

  return (
    <div
      className={`bg-cinzaMedio min-h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 fixed xl:relative `}
    >
      <BsArrowLeftShort
        className={`bg-white text-cinzaMedio text-3xl rounded-full absolute -right-3 top-9 border border-cinzaEscuro cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiOutlineFileDone
          className={`bg-vermelho text-4xl rounded cursor-pointer block float-left mr-2 duration-300 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-2xl text-branco font-extrabold duration-300 ${
            !open && "scale-0"
          }`}
        >
          TransferX
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-branco/20 mt-6 py-2 ${
          !open ? "px-4" : "px-2.5"
        }`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
          placeholder="Procurar"
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-branco/20 rounded-md mt-2 `}
          >
            <span className="text-2xl block float-left">{menu.icon}</span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              }`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
