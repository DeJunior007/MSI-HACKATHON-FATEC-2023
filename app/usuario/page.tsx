"use client";
import DashUserHead from "./head";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import check from "../../public/imgs/check-mark.png";
import { horarios } from "../constants/lista";
import logo from "../../public/imgs/msi-logo.png";
import logoutIcon from "../../public/imgs/logout.png";
import { useRouter } from "next/navigation";
import { Relogio } from "../components/relogio";
import Swal, { SweetAlertResult } from "sweetalert2";
import UserCard from "../components/card";
import card from "../../public/imgs/usercard.png";

interface AgendaItem {
  funcao: string;
  local: string;
  horario: string;
  confirmado: boolean;
}

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

  const openFAQModal = () => {
    Swal.fire({
      title: "Dúvidas Mais Frequentes",
      html: `
        <p class="tit-faq">Por que não consigo registrar minha presença?</p>
        <p class="texto-faq">
          A validação da presença ocorre por meio da geolocalização.
          Para que a validação seja bem-sucedida, é essencial que a pessoa esteja localizada a pelo menos 100 metros da obra.
          Caso a distância não atenda a esse critério, a presença não será validada.
        </p>
      `,
      icon: "info",
      confirmButtonText: "Fechar",
      confirmButtonColor: "#164C8B",
    });
  };

  const handleCheckboxChange = async (index: number) => {
    const isCanitar = horariosFiltrados[index]?.local === "Canitar";

    const result = await Swal.fire({
      title: "Confirmar presença",
      text: "Você confirma sua presença nesta atividade?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim, confirmar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#16498A",
      iconColor: "#18A832",
    });

    if (result.isConfirmed) {
      Swal.fire({
        text: "Aguarde enquanto confirmamos sua localização",
        timer: 2000,
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          const timerInterval = setInterval(() => {
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }, 200);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          clearInterval(timerInterval);

          if (isCanitar) {
            Swal.fire({
              title: "Atenção!",
              text: "Você está muito longe para realizar o registro de presença em Canitar.",
              icon: "error",
              confirmButtonColor: "#16498A",
            });
          } else {
            Swal.fire({
              icon: 'success',
              title:
                "Sua presença foi registrada com sucesso! Pode fechar o aplicativo!",
              confirmButtonColor: "#1F97CA",
              confirmButtonText: "Obrigado",
            });
          }
        },
      });
    }
  };

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
          <section className="w-full flex lt:flex-col md:flex-row justify-between items-center h-full mt-4">
            <div>
              <UserCard userName={userName} local={card} text="Sua agenda" />

              <button
                className="w-full text-center mt-2 text-[#164C8B] underline hover:cursor-pointer"
                onClick={openFAQModal}
              >
                Dúvidas?
              </button>
            </div>

            <article className="lt:w-full md:w-[70%] lt:mt-4 md:mt-0 h-full self-start grid lt:grid-cols-5 fd:grid-cols-7 divide-x divide-300">
              <div className="w-full flex justify-end lt:col-span-5 fd:col-span-7">
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
              <div className="bg-slate-300 py-1 text-center col-span-2 lt:hidden fd:block font-semibold text-lg rounded-tl">
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
                  className={`lt:w-full lt:col-span-5 fd:col-span-7  h-full self-start grid lt:grid-cols-5 fd:grid-cols-7 ${
                    index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
                  }`}
                >
                  <div className="text-center lt:hidden fd:block col-span-2 py-1" tabIndex={index}>
                    {agenda.funcao}
                  </div>
                  <div className="text-center col-span-2 py-1" tabIndex={index}>
                    {agenda.local}
                  </div>
                  <div className="text-center col-span-2 py-1" tabIndex={index}>
                    {agenda.horario}
                  </div>
                  <div
                    className="text-center py-1"
                    onClick={() => handleCheckboxChange(index)}
                  >
                    <input
                      type="checkbox"
                      className="accent-[#18A832] hover:cursor-pointer"
                      checked={agenda.confirmado}
                      onChange={() => {}}
                    />
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
