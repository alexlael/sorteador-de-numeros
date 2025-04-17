// Captura dos elementos

const qntNumsInput = document.querySelector("#amount");
const minNumInput = document.querySelector("#min");
const maxNumInput = document.querySelector("#max");
const form = document.querySelector("#form-sort");
const sectionSort = document.querySelector(".section-sort");
const sectionResult = document.querySelector(".section-result");

// pegando o submit do form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // previne o comportamento padrão do form (recarregar a página)
  // pegando os valores dos inputs

  const quantidade = parseInt(qntNumsInput.value);
  const min = parseInt(minNumInput.value);
  const max = parseInt(maxNumInput.value);

  //escondendo a section do formulário inicial
  sectionSort.classList.add("hidden");

  // mostrando a section do resultado
  sectionResult.classList.remove("hidden");

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(getRandomIntInclusive(min, max));
});

// Adicionando o evento de clique no botão de voltar
const backButton = document.querySelector(".btn-sort-again");

backButton.addEventListener("click", function (event) {
  event.preventDefault(); // previne o comportamento padrão do botão (recarregar a página)

  // Escondendo a seção de resultado
  sectionResult.classList.add("hidden");

  // Mostrando a seção de formulário novamente
  sectionSort.classList.remove("hidden");
  // Limpando os valores dos inputs
  qntNumsInput.value = "";
  minNumInput.value = "";
  maxNumInput.value = "";
});
