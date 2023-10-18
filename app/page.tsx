import Image from "next/image";
import background from "./assets/imgs/bg.svg";
import logo from "./assets/imgs/msi-logo.png";
export default function Home() {
  return (
    <main className="flex min-h-screen sm:items-center lt:items-start justify-center ">
      <Image
        src={background}
        className="w-full h-screen z-[-1] absolute "
        alt="background"
      />
      <Image
        src={logo}
        alt="logo da MSI"
        width={100}
        className="absolute top-0 left-5 lt:hidden sm:block"
      />
      <section className="lt:w-full sm:w-[400px] h-[75vh] absolute sm:max-h-[600px] flex-col lt:p-6 sm:p-12 rounded ">
        <div className="absolute inset-0 sm:border sm:backdrop-blur-lg rounded" />
        <Image
          src={logo}
          alt="logo da MSI"
          width={100}
          className="relative mb-6 lt:block sm:hidden"
        />
        <div className="relative h-full flex flex-col">
          <h1 className="text-3xl font-bold text-slate-100">Login</h1>
          <h2 className="text-sm font-light opacity-80 text-slate-100">
            Olá! Use suas credenciais para realizar login no sistema.
          </h2>
          <form className="flex-col w-full h-full flex flex-col">
            <input
              type="text"
              placeholder="Login"
              className="bg-transparent border-b my-4 border-[#1B4878] outline-none text-white"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-transparent border-b my-4 border-[#1B4878] outline-none text-white"
            />
            <button
              type="submit"
              className="bg-slate-100 w-auto p-2 text-[#0E2A48] rounded-full sm:mt-auto lt:mt-[50%]  font-bold"
            >
              Ativar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
