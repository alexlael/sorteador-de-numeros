// Captura dos elementos

const qntNumsInput = document.querySelector("#amount");
const minNumInput = document.querySelector("#min");
const maxNumInput = document.querySelector("#max");
const form = document.querySelector("#form-sort");
const noRepeatInput = document.querySelector("#no-repeat");
const sectionSort = document.querySelector(".section-sort");
const sectionResult = document.querySelector(".section-result");
const backButton = document.querySelector(".btn-sort-again");

// Função auxiliar para número aleatório
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Submissão do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

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

  // Esconde a seção do formulário
  sectionSort.classList.add("hidden");

  // Limpa resultados anteriores
  const resultContainer = document.querySelector(".result-numbers");
  resultContainer.innerHTML = "";

  // Mostra os números um a um com delay
  randomNumbers.forEach((number, index) => {
    setTimeout(() => {
      const numberElement = document.createElement("span");
      numberElement.classList.add("number-item");
      numberElement.innerText = number;

      resultContainer.appendChild(numberElement);
    }, index * 300); // 300ms entre cada número
  });

  // Exibe a seção de resultado
  sectionResult.classList.remove("hidden");
});

// Botão "Sortear novamente"
backButton.addEventListener("click", function (event) {
  event.preventDefault();

  sectionResult.classList.add("hidden");
  sectionSort.classList.remove("hidden");

  qntNumsInput.value = "5";
  minNumInput.value = "0";
  maxNumInput.value = "50";
});
