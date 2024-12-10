import { criarFilme } from "./criarFilme.js";

const listaDeCards = document.querySelector(".lista-de-cards");

export function exibirFilmes(filmes) {
    listaDeCards.innerHTML = "";
  
    if (filmes.length === 0) {
      const mensagem = document.createElement("p");
      mensagem.textContent = "Nenhum filme encontrado.";
      listaDeCards.appendChild(mensagem);
      return;
    }
  
    filmes.forEach((filme) => {
      const filmeDaLista = criarFilme(filme);
      listaDeCards.appendChild(filmeDaLista);
    });
  }