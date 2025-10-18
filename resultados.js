async function carregarResultados() {
  const origem = 'https://www.somatematica.com.br/lotofacilResultados.php';
  const res = await fetch('data/resultados.json');
  const dados = await res.json();
  mostrarResultados(dados.lotofacil);
}

function mostrarResultados(lista) {
  const container = document.getElementById('lista-resultados');
  lista.slice(0, 10).forEach(r => {
    const div = document.createElement('div');
    div.className = 'resultado';
    div.innerHTML = `Concurso ${r.concurso} (${r.data}): ${r.dezenas.join(', ')}`;
    container.appendChild(div);
  });
}

window.onload = carregarResultados;