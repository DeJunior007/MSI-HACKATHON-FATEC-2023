"use client";
import DashUserHead from "./head";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import card from "../assets/imgs/usercard.png";
import check from "../assets/imgs/check-mark.png";
import { horarios } from "../constants/lista";
import logo from "../assets/imgs/msi-logo.png";
import logoutIcon from "../assets/imgs/logout.png";
import { useRouter } from "next/navigation";
import { Relogio } from "../components/relogio";

export default function Dash() {
  const userName = sessionStorage.getItem("UserName") || "Usuário";
  const router = useRouter();

  const handleLogout = () => {
    if (sessionStorage.getItem("UserName")) {
      sessionStorage.removeItem("UserName");
    }
    router.push("/");
  };

  const [presenca, setPresenca] = useState(horarios);
  const [diaSelecionado, setDiaSelecionado] = useState("0");
  const handleDiaChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDiaSelecionado(e.target.value);
  };
  const horariosFiltrados = presenca.filter(
    (agenda) => agenda.dia === diaSelecionado
  );
  return (
    <>
      <DashUserHead />
      <main className="flex flex-col min-h-screen">
        <nav className="flex justify-start items-center px-4 shadow">
          <Image src={logo} alt="logo da MSI" width={75} />
          <div className="w-full flex justify-end items-center h-full">
            <div className="w-full flex justify-center items-center">
              <Relogio />
            </div>
            <button
              className="flex flex-col items-center justify-center"
              onClick={handleLogout}
            >
              <Image
                src={logoutIcon}
                width={20}
                alt="Ícone de logout do sistema"
                className="mr-1"
              />
              Logout
            </button>
          </div>
        </nav>
        <section className="p-4 flex flex-col justify-between">
          <section className=" w-full flex  lt:flex-col md:flex-row justify-between items-center h-full mt-4">
            <div>
              <div className="rounded-t flex flex-col items-center justify-center w-auto h-auto border-l border-r border-t">
                <p className="text-lg p-1">{`Seja bem-vindo, ${userName}!`}</p>
                <Image src={card} alt="vector de card do usuario" width={150} />
                <p className="text-xl bg-[#16498A] text-slate-100 p-2 w-full text-center h-full rounded-b-lg font-bold">
                  Confira sua agenda!
                </p>{" "}
              </div>
              <p className="w-full text-center mt-2 text-[#164C8B] underline hover:cursor-pointer">
                Duvidas?
              </p>
            </div>

            <article className="lt:w-full md:w-[70%] lt:mt-4 md:mt-0 h-full self-start grid grid-cols-7 divide-x divide-300">
              <div className="w-full flex justify-end col-span-7">
                <select
                  value={diaSelecionado}
                  className="border-[#16498A] border-2 mb-4 rounded-lg text-[#16498A] outline-none"
                  onChange={handleDiaChange}
                >
                  <option value="0">Segunda-feira</option>
                  <option value="1">Terça-feira</option>
                  <option value="2">Quarta-feira</option>
                  <option value="3">Quinta-feira</option>
                  <option value="4">Sexta-feira</option>
                </select>
              </div>
              <div className="bg-slate-300 py-1 text-center col-span-2 font-semibold text-lg rounded-tl">
                Função
              </div>
              <div className="bg-slate-300 py-1 text-center col-span-2 font-semibold text-lg">
                Local
              </div>
              <div className="bg-slate-300 py-1 text-center col-span-2 font-semibold text-lg">
                Horario
              </div>
              <div className="bg-slate-300 py-1 text-center font-semibold text-lg flex justify-center items-center rounded-tr">
                <Image width={25} src={check} alt="check icone" />
              </div>
              {horariosFiltrados.map((agenda, index) => (
                <article
                  className={`lt:w-full col-span-7  h-full self-start grid grid-cols-7 ${
                    index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
                  }`}
                >
                  <div className="text-center col-span-2 py-1" tabIndex={index}>
                    {agenda.funcao}
                  </div>
                  <div className="text-center col-span-2 py-1" tabIndex={index}>
                    {agenda.local}
                  </div>
                  <div className="text-center col-span-2 py-1" tabIndex={index}>
                    {agenda.horario}
                  </div>
                  <div className="text-center py-1" tabIndex={index}>
                    <input className="accent-[#18A832]" type="checkbox" />
                  </div>
                </article>
              ))}
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
