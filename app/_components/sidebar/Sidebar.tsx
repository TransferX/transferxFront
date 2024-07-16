import { useState, useEffect } from 'react';
import { BsList, BsX, BsSearch } from 'react-icons/bs';
import { AiOutlineFileDone } from 'react-icons/ai';
import {
  BiTransfer,
  BiSolidDashboard,
  BiQrScan,
  BiBell,
  BiWrench,
  BiHelpCircle,
  BiExit,
} from "react-icons/bi";
import Link from 'next/link';

type MenuItem = {
  icon: JSX.Element;
  title: string;
  path: string;
};

const Menus: MenuItem[] = [
  { title: "Dashboard", icon: <BiSolidDashboard />, path: "/dashboard" },
  { title: "Transferências", icon: <BiTransfer />, path: "/transferencias" },
  { title: "Validar Selo", icon: <BiQrScan />, path: "/dashboard" },
  { title: "Notificações", icon: <BiBell />, path: "/dashboard" },
  { title: "Configurações", icon: <BiWrench />, path: "/dashboard" },
  { title: "Ajuda", icon: <BiHelpCircle />, path: "/dashboard" },
  { title: "Sair", icon: <BiExit />, path: "/dashboard" },
];

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Função para atualizar o estado do menu com base no scroll da tela
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (open && window.scrollY > 0) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <>

      {!open && (
        <div className="lg:hidden fixed top-0 left-0 w-full z-50 py-3 px-5 flex items-center justify-center backdrop-filter backdrop-blur-lg">
          <BsList
            className="text-4xl text-gray-600 cursor-pointer absolute left-4"
            onClick={() => setOpen(true)}
          />
          <h1 className="text-2xl text-cinzaEscuro font-extrabold">TransferX</h1>
        </div>
      )}

      <div
        className={`bg-cinzaMedio min-h-screen p-5 pt-${open ? '20' : '32'} fixed lg:relative z-40 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 w-72`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <AiOutlineFileDone className="text-red-500 text-4xl rounded cursor-pointer mr-2" />
            <h1 className="text-2xl text-white font-extrabold">TransferX</h1>
          </div>
          <BsX
            className={`text-4xl text-white cursor-pointer lg:hidden ${open ? 'block' : 'hidden'}`}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="flex items-center rounded-md bg-white bg-opacity-20 py-2 px-2.5">
          <BsSearch className="text-white text-lg block float-left cursor-pointer mr-2" />
          <input
            type="search"
            className="text-base bg-transparent w-full text-white focus:outline-none"
            placeholder="Procurar"
          />
        </div>

        <ul className="pt-4">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white bg-opacity-20 rounded-md mt-2"
            >
             
              <span className="text-2xl block float-left">{menu.icon}</span>
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default MobileMenu;
