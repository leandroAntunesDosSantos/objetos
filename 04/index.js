const usuarios = [
  {
    nome: "João",
    idade: 25,
    maior_idade: null,
  },
  {
    nome: "Ana",
    idade: 18,
    maior_idade: null,
  },
  {
    nome: "Beatriz",
    idade: 15,
    maior_idade: null,
  },
  {
    nome: "Carlos",
    idade: 16,
    maior_idade: null,
  },
  {
    nome: "Antonio",
    idade: 32,
    maior_idade: null,
  },
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].idade > 17) {
    usuarios[i].maior_idade = true;
  } else {
    usuarios[i].maior_idade = false;
  }
}

console.log(usuarios);
