import { criarFilme } from "./criarFilme.js";
const listaDeCards = document.querySelector(".lista-de-cards");

export function adicionarAosFavoritos(filme) {
    const favoritos = obterFavoritos();
    if (!favoritos.find((f) => f.id === filme.id)) {
      favoritos.push(filme);
      salvarFavoritos(favoritos);
      console.log(`${filme.title} foi adicionado aos favoritos.`);
    }
  }
  
export function removerDosFavoritos(filmeId) {
      const favoritos = obterFavoritos();
      const filmeRemovido = favoritos.find((f) => f.id === filmeId);
      const novosFavoritos = favoritos.filter((f) => f.id !== filmeId);
      salvarFavoritos(novosFavoritos);
    
      if (filmeRemovido) {
        alert(`${filmeRemovido.title} foi removido dos favoritos.`);
      }
    }
  
export function salvarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
  
export function obterFavoritos() {
    const favoritos = localStorage.getItem("favoritos");
    return favoritos ? JSON.parse(favoritos) : [];
  }
  
export function carregarFavoritos() {
    const favoritos = obterFavoritos();
    favoritos.forEach((filme) => {
      const filmeDaLista = criarFilme(filme);
      const coracao = filmeDaLista.querySelector(".favoritar");
      coracao.classList.add("clicadaFavoritar");
      listaDeCards.appendChild(filmeDaLista);
    });
  }
