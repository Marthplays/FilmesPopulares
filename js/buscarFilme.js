import { exibirFilmes } from "./exibirFilmes.js";

const apiKey = "91cfce7f2f2153063b90797cc61ce724";
const baseUrl = "https://api.themoviedb.org/3";

export async function buscarFilmes(query) {
    const endpoint = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&language=pt-BR`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Erro ao buscar filmes");
      }
  
      const data = await response.json();
      exibirFilmes(data.results);
    } catch (error) {
      console.error("Erro:", error);
      alert("Não foi possível buscar os filmes. Tente novamente.");
    }
  }