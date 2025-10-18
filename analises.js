function gerarJogo() {
  const tipo = document.getElementById("criterio").value;

  let jogo = [];
  if (tipo === "frequencia") {
    jogo = gerarPorFrequencia();
  } else if (tipo === "pares-impares") {
    jogo = gerarBalanceado();
  } else if (tipo === "repetidos") {
    jogo = gerarRepetidos();
  } else {
    jogo = gerarAleatorio();
  }

  document.getElementById("resultado-jogo").innerText =
    "Jogo sugerido: " + jogo.join(", ");
}

function gerarPorFrequencia() {
  const frequentes = [1,2,3,4,5,6,7,9,14,15,16,17,21,23,24];
  return frequentes;
}

function gerarBalanceado() {
  const pares = [2,4,6,8,10,12,14,16,18,20,22,24];
  const impares = [1,3,5,7,9,11,13,15,17,19,21,23,25];
  return embaralhar([...pares.slice(0,7), ...impares.slice(0,8)]);
}

function gerarAleatorio() {
  const nums = Array.from({length:25},(_,i)=>i+1);
  return embaralhar(nums).slice(0,15);
}

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}