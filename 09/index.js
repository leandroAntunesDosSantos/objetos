const participantes = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

let participanteProcurado = participantes.find((participante) => {
  return participante.nome === "Carlos";
});

//console.log(participanteProcurado);

let indiceParticipante = participantes.indexOf(participanteProcurado) + 1;

//console.log(indiceParticipante);

console.log(
  `Galera... O ${participanteProcurado.nome} está na posição ${indiceParticipante}, corre lá!`
);
