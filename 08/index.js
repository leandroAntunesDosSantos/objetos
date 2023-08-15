const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (let i = 0; i < usuarios.length; i++) {
  const pets = usuarios[i].pets;
  const nome = usuarios[i].nome;
  const qtdPets = pets.length;
  //   console.log(nome);
  //   console.log(pets);               //isso me ajudou a entender o que estava recebendo do exercicio
  //   console.log(qtdPets);
  if (qtdPets === [] || qtdPets === 0) {
    console.log(`Sou ${nome} e não tenho pets`);
  } else if (qtdPets === 1) {
    console.log(`Sou ${nome} e tenho ${qtdPets} pet`);
  } else {
    console.log(`Sou ${nome} e tenho ${qtdPets} pets`);
  }
}
