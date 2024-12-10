import { buscarFilmes } from "./buscarFilme.js";
import { carregarFavoritos } from "./favoritos.js";

const botaoPesquisar = document.getElementById("lupa");
const campoPesquisar = document.getElementById("campo-pesquisa");
const listaDeCards = document.querySelector(".lista-de-cards");
const imagemCheckbox = document.querySelector(".imagem-checkbox");

botaoPesquisar.addEventListener("click", () => {
  console.log("Lupa clicada!");
  const enterEvent = new KeyboardEvent("keypress", {
    key: "Enter",
    keyCode: 13,
    code: "Enter",
    bubbles: true,
  });

  campoPesquisar.dispatchEvent(enterEvent);
});

botaoPesquisar.addEventListener("click", () => {
  const query = campoPesquisar.value.trim();
  if (query) {
    buscarFilmes(query);
  } else {
    alert("Digite o nome de um filme para buscar.");
  }
});

campoPesquisar.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    evento.preventDefault();
    const query = campoPesquisar.value.trim();
    if (query) {
      buscarFilmes(query);
    } else {
      alert("Digite o nome de um filme para buscar.");
    }
  }
});

imagemCheckbox.addEventListener("click", () => {
  if (imagemCheckbox.classList.contains("clicada")) {
    listaDeCards.innerHTML = ""; 
    carregarFavoritos(); 
  } else {
    listaDeCards.innerHTML = "";
  }
});
