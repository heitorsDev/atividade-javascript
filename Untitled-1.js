
let cidade = "São Paulo";
let estado = "São Paulo";
let localizacao = cidade + ", " + estado;
console.log(localizacao);
console.log(localizacao.toLowerCase());

let altura = 5;
let largura = 15;
console.log(altura * largura);
console.log(2 * (altura + largura));
console.log(altura * largura);
console.log(largura / altura);
console.log(largura % altura);
let hipotenusa = Math.sqrt(altura ** 2 + largura ** 2);
console.log(hipotenusa);

let estaFrio = true;
if (estaFrio) {
  console.log("Está frio");
} else {
  console.log("Não está frio");
}
estaFrio = !estaFrio;
console.log(estaFrio);
let estaQuente = false;
console.log(estaFrio && estaQuente);
console.log(estaFrio || estaQuente);

let livro = {
  titulo: "Título do Livro",
  autor: "Nome do Autor",
  anoPublicacao: 2024,
};
livro.editora = "Nome da Editora";
console.log(livro);

let cores = ["vermelho", "azul", "verde"];
cores.push("amarelo");
cores.pop();
console.log(cores);

let dataAtual = new Date();
let dataNascimento = new Date("1990-01-01");
let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
if (
  dataAtual.getMonth() < dataNascimento.getMonth() ||
  (dataAtual.getMonth() === dataNascimento.getMonth() &&
    dataAtual.getDate() < dataNascimento.getDate())
) {
  idade -= 1;
}
console.log(idade);

function calculaArea(largura, altura) {
  return largura * altura;
}
console.log(calculaArea(5, 10));

function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
saudacao("Seu Nome");

let aluno = {
  nome: "Nome do Aluno",
  idade: 20,
  curso: "Desenvolvimento de Sistemas",
  apresentacao: function () {
    console.log(
      "Olá, meu nome é " +
        this.nome +
        ", tenho " +
        this.idade +
        " anos, e estou cursando " +
        this.curso +
        "."
    );
  },
};
aluno.apresentacao();

let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map((numero) => numero * 2);
let numerosMaioresQueDois = numeros.filter((numero) => numero > 2);
console.log(numerosDobrados);
console.log(numerosMaioresQueDois);