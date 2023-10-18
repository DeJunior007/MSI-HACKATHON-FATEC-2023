import { useState, useEffect } from "react";

function zeroAEsquerda(valor: number): string {
  return valor < 10 ? `0${valor}` : valor.toString();
}

export function Relogio() {
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      atualizarTempo();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const atualizarTempo = () => {
    const agora = new Date();
    const minutosAtuais = agora.getMinutes();
    const horasAtuais = agora.getHours();

    setMinutos(minutosAtuais);
    setHoras(horasAtuais);
  };

  return (
    <div>
      <p className="text-lg">
        {zeroAEsquerda(horas)}:{zeroAEsquerda(minutos)}
      </p>
    </div>
  );
}
