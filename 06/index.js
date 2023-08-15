const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

//console.log(usuarios);

const jovens = [];

const adultos = [];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].idade < 18) {
    jovens.push(usuarios[i]);
  } else {
    adultos.push(usuarios[i]);
  }
}

console.log(jovens);
console.log(adultos);
