const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};

const aula_adicionar = [
  {
    Identificador: 1,
    Nome_da_aula: "Introdução_a_programação",
  },

  {
    identificador: 2,
    Nome_da_aula: "Variáveis",
  },

  {
    identificador: 3,
    Nome_da_aula: "Condicionais",
  },

  {
    identificador: 4,
    Nome_da_aula: "Arrays",
  },
];

let { aulas } = curso;

for (let item of aula_adicionar) {
  aulas.push(item);
}
console.log(curso);
