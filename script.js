// Captura dos elementos

const qntNumsInput = document.querySelector("#amount");
const minNumInput = document.querySelector("#min");
const maxNumInput = document.querySelector("#max");
const form = document.querySelector("#form-sort");
const noRepeatInput = document.querySelector("#no-repeat");
const sectionSort = document.querySelector(".section-sort");
const sectionResult = document.querySelector(".section-result");
const backButton = document.querySelector(".btn-sort-again");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pegando o submit do form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // previne o comportamento padrão do form (recarregar a página)
  // pegando os valores dos inputs

  const quantidade = qntNumsInput.valueAsNumber;
  const min = minNumInput.valueAsNumber;
  const max = maxNumInput.valueAsNumber;
  let randomNumbers = [];

  // Função que preenche o array até ter exatamente `quantidade` valores
function loopNumbers() {
  while (randomNumbers.length < quantidade) {
    randomNumbers.push(getRandomIntInclusive(min, max));
  }
}

// Primeiro preenche o array
loopNumbers();

if (noRepeatInput.checked) {
  // Cria o Set e continua gerando números enquanto faltar
  const uniqueNumbers = new Set(randomNumbers);
  while (uniqueNumbers.size < quantidade) {
    uniqueNumbers.add(getRandomIntInclusive(min, max));
  }
  randomNumbers = [...uniqueNumbers];
}

console.log(...randomNumbers);

  //escondendo a section do formulário inicial
  sectionSort.classList.add("hidden");

  // mostrando a section do resultado
  sectionResult.classList.remove("hidden");
});

backButton.addEventListener("click", function (event) {
  event.preventDefault(); // previne o comportamento padrão do botão (recarregar a página)

  // Escondendo a seção de resultado
  sectionResult.classList.add("hidden");

  // Mostrando a seção de formulário novamente
  sectionSort.classList.remove("hidden");
  // Limpando os valores dos inputs
  qntNumsInput.value = "5";
  minNumInput.value = "0";
  maxNumInput.value = "50";
});
