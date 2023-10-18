import axios from 'axios';

export async function getTime() {
  try {
    const resposta = await axios.get('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');

    switch (resposta.status) {
      case 200:
        const dataHoraBrasilia = resposta.data.datetime;
        console.log('Hora em Brasília:', dataHoraBrasilia);
        return dataHoraBrasilia;
      default:
        console.error('Erro não tratado. Código de Status:', resposta.status);
        return null;
    }
  } catch (erro: any) {
    switch (erro.response?.status) {
      case 404:
        console.error('Recurso não encontrado. Verifique a URL.');
        break;
      case 500:
        console.error('Erro interno do servidor.');
        break;
      default:
        console.error('Erro ao obter a hora em Brasília:', erro.message);
        break;
    }
    return null;
  }
}
