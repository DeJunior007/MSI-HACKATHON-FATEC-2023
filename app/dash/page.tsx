"use client";

import DashHead from "./head";
export default function Dash() {
  const userName = localStorage.getItem("UserName") || "Usuário";

  return (
    <>
      <DashHead />
      <main className="flex min-h-screen sm:items-center lt:items-start justify-center">
        {`Olá, ${userName}`}
      </main>
    </>
  );
}
