type Pessoa = {
  codigo: string;
  nome: string;
  funcao: "pedreiro" | "encanador" | "eletricista" | "pintor";
  presenca: boolean;
};

type LocalObra = {
  [x: string]: any;
  nome: string;
  horario: string;
  pessoasAtribuidas: Pessoa[]; // Adicionamos pessoasAtribuidas
};
const pessoas: Pessoa[] = [
  { codigo: "00", nome: "João", funcao: "pedreiro", presenca: false },
  { codigo: "01", nome: "Mário", funcao: "encanador", presenca: false },
  { codigo: "02", nome: "José", funcao: "eletricista", presenca: false },
  { codigo: "03", nome: "Antônio", funcao: "pintor", presenca: false },
  { codigo: "04", nome: "Carlos", funcao: "pedreiro", presenca: false },
  { codigo: "05", nome: "Luiz", funcao: "encanador", presenca: false },
  { codigo: "06", nome: "Ricardo", funcao: "eletricista", presenca: false },
  { codigo: "07", nome: "Fernando", funcao: "pintor", presenca: false },
  { codigo: "08", nome: "Eduardo", funcao: "pedreiro", presenca: false },
  { codigo: "09", nome: "Marcelo", funcao: "encanador", presenca: false },
];

const locaisObras: LocalObra[] = [
  { nome: "Ourinhos", horario: "08:00 - 17:00", pessoasAtribuidas: [] },
  { nome: "Salto", horario: "09:00 - 18:00", pessoasAtribuidas: [] },
  { nome: "Garça", horario: "08:00 - 17:00", pessoasAtribuidas: [] },
];

function atribuirPessoasALocais(): LocalObra[] {
  const atribuicoesLocais: LocalObra[] = locaisObras.map((localObra, index) => {
    const pessoasAtribuidas = [];

    if (index === 0) {
      pessoasAtribuidas.push(...pessoas.slice(0, 5));
    } else if (index === 1) {
      pessoasAtribuidas.push(...pessoas.slice(4, 9));
    } else if (index === 2) {
      pessoasAtribuidas.push(...pessoas.slice(7, 10), ...pessoas.slice(0, 2));
    }

    return { ...localObra, pessoasAtribuidas };
  });

  return atribuicoesLocais;
}

export const atribuicoes = atribuirPessoasALocais();
