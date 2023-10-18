import axios from "axios";

export async function getTime() {
  try {
    const resposta = await axios.get(
      "http://worldtimeapi.org/api/timezone/America/Sao_Paulo"
    );

    switch (resposta.status) {
      case 200:
        const dataHoraBrasilia = new Date(resposta.data.datetime);
        return dataHoraBrasilia;
      default:
        console.error(
          "Erro, não foi possível realizar a consulta",
          resposta.status
        );
        return null;
    }
  } catch (erro: any) {
    console.error("Erro ao obter a hora em Brasília:", erro.message);
    return null;
  }
}
