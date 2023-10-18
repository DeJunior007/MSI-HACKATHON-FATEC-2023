import { useState, useEffect } from "react";
import { getTime } from "../utils/getTime";

function zeroAEsquerda(valor: number): string {
  return String(valor).padStart(2, "0");
}

export function Relogio() {
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [diaSemana, setDiaSemana] = useState("");

  useEffect(() => {
    async function fetchTime() {
      const dataHoraBrasilia = await getTime();
      if (dataHoraBrasilia) {
        const minutosAtuais = dataHoraBrasilia.getMinutes();
        const horasAtuais = dataHoraBrasilia.getHours();
        const diaSemanaAtual = dataHoraBrasilia.toLocaleString("pt-BR", {
          weekday: "long",
        });

        setMinutos(minutosAtuais);
        setHoras(horasAtuais);
        setDiaSemana(diaSemanaAtual);
      }
    }

    fetchTime();

    const interval = setInterval(() => {
      fetchTime();
    }, 60000);  

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center lt:hidden sm:flex">
      <p className="text-lg">
        {zeroAEsquerda(horas)}:{zeroAEsquerda(minutos)}
      </p>
      <p className="text-md">{diaSemana}</p>
    </div>
  );
}
