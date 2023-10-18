"use client";
import SenhaHead from "./head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import background from "../../public/imgs/bg.svg";
import logo from "../../public/imgs/msi-logo.png";
import Swal, { SweetAlertResult } from "sweetalert2";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState("");
  const UserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const router = useRouter();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userNameToSave = user || "Usuário";
    sessionStorage.setItem("UserName", userNameToSave);

    let timerInterval: NodeJS.Timeout;

    Swal.fire({
      text: "Aguarde enquanto enviamos sua solicitação...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          if (b) {
            b.textContent = Swal.getTimerLeft().toString();
          }
        }, 200);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result: SweetAlertResult) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: `Um link de recuperação de senha já foi enviado para ${user}`,
          confirmButtonColor: "#1F97CA",
          confirmButtonText: "Obrigado",
        });
      }
    });
  };

  return (
    <>
      <SenhaHead />
      <main className="flex min-h-screen sm:items-center lt:items-start justify-center ">
        <Image
          src={background}
          className="w-full h-screen z-[-1] absolute "
          alt="background"
        />
        <Image
          src={logo}
          alt="logo da MSI"
          width={75}
          className="absolute top-0 left-5 lt:hidden sm:block"
        />
        <section className="lt:w-full sm:w-[400px] h-[75vh] absolute sm:max-h-[600px] flex-col lt:p-6 sm:p-12 rounded ">
          <div className="absolute inset-0 sm:border border-slate-100/30 sm:backdrop-blur-lg rounded" />
          <Image
            src={logo}
            alt="logo da MSI"
            width={100}
            className="relative mb-6 lt:block sm:hidden"
          />
          <div className="relative h-full flex flex-col">
            <h1 className="text-3xl font-bold text-slate-100">
              Recuperar Senha
            </h1>
            <h2 className="text-sm font-light opacity-80 my-2 text-slate-100">
              Opa, parece que esqueceu sua senha.
              <br />
              Preencha com seu E-mail coorportativo e clique em Recuperar.
            </h2>
            <form
              className="flex-col w-full h-full flex flex-col"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                placeholder="E-mail"
                onChange={UserChange}
                className="bg-transparent border-b my-4 border-slate-100/50 outline-none text-white"
              />

              <Link
                href={"/"}
                className="text-sm text-[#18a832] my-6 font-light text-end underline"
              >
                Já lembrei
              </Link>
              <button
                type="submit"
                className="bg-slate-100 w-auto p-2 text-[#0E2A48] rounded-full sm:mt-auto lt:mt-[50%]  font-bold"
              >
                Recuperar
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
