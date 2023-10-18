"use client";

import DashHead from "./head";
import Image from "next/image";
import logo from "../assets/imgs/msi-logo.png";
import logout from "../assets/imgs/logout.png";
import { useRouter } from "next/navigation";
import { Relogio } from "../components/relogio";
import {} from "react-icons";
export default function Dash() {
  const userName = sessionStorage.getItem("UserName") || "Usuário";
  const router = useRouter();
  const handleLogout = (event: any) => {
    if (sessionStorage.getItem("UserName")) {
      sessionStorage.removeItem("UserName");
    }
    router.push("/");
  };

  return (
    <>
      <DashHead />
      <main className="flex flex-col min-h-screen ">
        <nav className="flex justify-start items-center px-4 shadow">
          <Image src={logo} alt="logo da MSI" width={75} />
          <article className="w-full flex justify-end items-center h-full">
            <div className="w-full flex justify-center items-center">
              <Relogio />
            </div>
            <table>
              <tr>
                <button
                  className="flex flex-col items-center justify-center"
                  onClick={handleLogout}
                >
                  <Image
                    src={logout}
                    width={20}
                    alt={"Icone de logout do sistema"}
                    className="mr-1"
                  />
                  Logout
                </button>
              </tr>
            </table>
          </article>
        </nav>
        <section className="p-4"> {`Olá, ${userName}`}</section>
      </main>
    </>
  );
}
