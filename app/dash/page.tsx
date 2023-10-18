"use client";
import DashHead from "./head";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/imgs/msi-logo.png";
import logoutIcon from "../assets/imgs/logout.png";
import { useRouter } from "next/navigation";
import { atribuicoes } from "../constants/lista";
import { Relogio } from "../components/relogio";

export default function Dash() {
  const [escolhaCidade, setEscolhaCidade] = useState("Ourinhos");
  const userName = sessionStorage.getItem("UserName") || "Usuário";
  const router = useRouter();

  const handleLogout = () => {
    if (sessionStorage.getItem("UserName")) {
      sessionStorage.removeItem("UserName");
    }
    router.push("/");
  };

  const atribuicoesLocais = atribuicoes[escolhaCidade];
  const [presenca, setPresenca] = useState(
    atribuicoesLocais.map(
      (atribuicao: { presenca: any }) => atribuicao.presenca
    )
  );

  const handleCidadeChange = (event: any) => {
    setEscolhaCidade(event.target.value);
  };

  const handlePresencaChange = (index: any) => {
    const newPresenca = [...presenca];
    newPresenca[index] = !newPresenca[index];
    setPresenca(newPresenca);
  };

  return (
    <>
      <DashHead />
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
        <section className="p-4 flex justify-between">
          <p className="text-xl">{`Seja bem-vindo, ${userName}!`}</p>
          <select
            value={escolhaCidade}
            onChange={handleCidadeChange}
            className="border-2 rounded-lg border-[#16498A] p-1 font-bold rounded-full text-[#16498A] outline-none"
          >
            <option value="Ourinhos">Ourinhos</option>
            <option value="Canitar">Canitar</option>
          </select>
        </section>
        <section className="p-4 w-full grid lt:grid-cols-4 sm:grid-cols-9 w-full divide-x divide-slate-100">
          <div className="bg-slate-300 rounded-tl-lg w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2">
            Nome
          </div>
          <div className="bg-slate-300 w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2">
            Função
          </div>
          <div className="bg-slate-300 w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2">
            Local
          </div>
          <div className="bg-slate-300 w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2 lt:hidden sm:block">
            Horario
          </div>
          <div className="bg-slate-300 w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg rounded-tr-lg">
            Presença
          </div>
          {atribuicoesLocais.map((atribuicao: any, index: any) => (
            <section
              key={index}
              className={`sm:col-span-9 lt:col-span-4  w-full grid lt:grid-cols-4 sm:grid-cols-9 w-full divide-x ${
                index % 2 === 0 ? "bg-slate-100 " : "bg-slate-300"
              }`}
            >
              <div className="w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2">
                {atribuicao.nome}
              </div>
              <div className="w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2">
                {atribuicao.funcao}
              </div>
              <div className="w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1 sm:col-span-2 ">
                {atribuicao.local}
              </div>
              <div className="w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg lt:col-span-1  lt:hidden sm:block sm:col-span-2">
                {atribuicao.horario}
              </div>
              <div
                className={`w-full text-center py-1 font-semibold lt:text-sm sm:text-base md:text-lg col-span-1 ${
                  index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
                }
               `}
              >
                <input
                  type="checkbox"
                  checked={presenca[index]}
                  className="accent-[#18A832]"
                  onChange={() => handlePresencaChange(index)}
                />
              </div>
            </section>
          ))}
        </section>
      </main>
    </>
  );
}
