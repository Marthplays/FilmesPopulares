import { adicionarAosFavoritos } from "./favoritos.js";
import { removerDosFavoritos } from "./favoritos.js";

const listaDeCards = document.querySelector(".lista-de-cards");

export function criarFilme(filme) {
    const filmeDaLista = document.createElement("li");
    const cardDoFilme = document.createElement("div");
    cardDoFilme.classList.add("card");
  
    listaDeCards.appendChild(filmeDaLista);
    filmeDaLista.appendChild(cardDoFilme);
  
    const containerImagemfilme = document.createElement("div");
    containerImagemfilme.classList.add("imagem-filme");
  
    const imagemDoFilme = document.createElement("img");
    imagemDoFilme.src = filme.poster_path
      ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
      : "/img/image 1.svg";
    imagemDoFilme.alt = filme.title;
  
    cardDoFilme.appendChild(containerImagemfilme);
    containerImagemfilme.appendChild(imagemDoFilme);
  
    const fichaTecnica = document.createElement("div");
    fichaTecnica.classList.add("ficha-tecnica");
  
    const titulo = document.createElement("p");
    titulo.classList.add("titulo-filme");
    titulo.innerText = filme.title;
  
    cardDoFilme.appendChild(fichaTecnica);
    fichaTecnica.appendChild(titulo);
  
    const containerNotaDoFilme = document.createElement("div");
    containerNotaDoFilme.classList.add("nota");
  
    const estrela = document.createElement("img");
    estrela.src = "/img/Vector (1).svg";
    estrela.alt = "Estrela";
  
    const notaDoFilme = document.createElement("p");
    notaDoFilme.classList.add("nota-filme");
    notaDoFilme.innerText = filme.vote_average.toFixed(1);
  
    fichaTecnica.appendChild(containerNotaDoFilme);
    containerNotaDoFilme.appendChild(estrela);
    containerNotaDoFilme.appendChild(notaDoFilme);
  
    const containerFavoritos = document.createElement("div");
    containerFavoritos.classList.add("favoritacao");
  
    const coracao = document.createElement("img");
    coracao.src = "/img/Heart.svg";
    coracao.alt = "Coração";
    coracao.classList.add("favoritar");
    coracao.onclick = () => {
      coracao.classList.toggle("clicadaFavoritar");
      if (coracao.classList.contains("clicadaFavoritar")) {
        adicionarAosFavoritos(filme);
      } else {
        removerDosFavoritos(filme.id);
      }
    };
  
    const favoritar = document.createElement("p");
    favoritar.classList.add("favorito");
    favoritar.innerText = "Favoritar";
  
    fichaTecnica.appendChild(containerFavoritos);
    containerFavoritos.appendChild(coracao);
    containerFavoritos.appendChild(favoritar);
  
    const containerResumo = document.createElement("div");
    containerResumo.classList.add("resumo");
  
    const resumo = document.createElement("p");
    resumo.innerText = filme.overview || "Descrição não disponível.";
  
    containerResumo.appendChild(resumo);
    cardDoFilme.appendChild(containerResumo);
  
    return filmeDaLista;
  }