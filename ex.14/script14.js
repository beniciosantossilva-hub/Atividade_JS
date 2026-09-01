let totalVisitas = 0;
const campoNome = document.querySelector("#nome");
const botao = document.querySelector("#registrar");
const globalSaida = document.querySelector("#global");
const localSaida = document.querySelector("#local");

botao.addEventListener("click", () => {
  const nomeVisitas = campoNome.value.trim();

  if (nomeVisitante === ""){
    localSaida.textContent = "Variável Local: Digite um Nome";
    return;
  }

  totalVisitas++;
  const mensagemLocal = "Último Visitante: " + nomeVisitante;

  globalSaida.textContent = "Total Global de Visitantes: " + totalVisitantes;
  localSaida.textContet = mensagemLocal;
});
