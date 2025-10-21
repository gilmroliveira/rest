let lotofacilData = [];

async function carregarDados() {
    const response = await fetch('lotofacil_data.json');
    lotofacilData = await response.json();
    console.log('Dados carregados:', lotofacilData.length, 'concurso(s)');
}

function calcularFrequencia() {
    const freq = {};
    for(let i=1; i<=25; i++) freq[i] = 0;

    lotofacilData.forEach(concurso => {
        for(let i=1; i<=15; i++) {
            freq[concurso['Bola' + i]]++;
        }
    });
    return freq;
}

function frequenciaRecente(ultimos=50) {
    const freq = {};
    for(let i=1; i<=25; i++) freq[i] = 0;

    let dados = lotofacilData.slice(-ultimos);
    dados.forEach(concurso => {
        for(let i=1; i<=15; i++) {
            freq[concurso['Bola' + i]]++;
        }
    });
    return freq;
}

function analiseSequenciaRepeticoes() {
    let resultados = [];
    for(let i=0; i < lotofacilData.length - 1; i++) {
        let atual = lotofacilData[i];
        let proximo = lotofacilData[i+1];
        let bolasAtual = [];
        let bolasProximo = [];
        for(let j=1; j<=15; j++) {
            bolasAtual.push(atual['Bola' + j]);
            bolasProximo.push(proximo['Bola' + j]);
        }
        let repetidos = bolasAtual.filter(x => bolasProximo.includes(x));
        resultados.push(repetidos.length);
    }
    return resultados;
}

const fibonacciSeq = [1,2,3,5,8,13,21,34,55,89,144,233,377,610,987];

function filtroFibonacci() {
    const freq = calcularFrequencia();
    let candidatos = [];
    for(let i=1; i<=25; i++) {
        let proxFib = fibonacciSeq.find(f => f >= i);
        if(proxFib && proxFib <= 25) {
            if(freq[i] >= 2000) candidatos.push(i);
        }
    }
    return candidatos;
}

function gerarJogoBalanceado() {
    const freq = calcularFrequencia();
    let numeros = [];
    let pares = [];
    let impares = [];
    for(let i=1; i<=25; i++) {
        if(i % 2 === 0) pares.push([i, freq[i]]);
        else impares.push([i, freq[i]]);
    }
    pares.sort((a,b) => b[1] - a[1]);
    impares.sort((a,b) => b[1] - a[1]);

    numeros = pares.slice(0,7).map(x => x[0]).concat(impares.slice(0,8).map(x => x[0]));
    numeros.sort((a,b) => a-b);
    return numeros;
}

function desenharGraficoFrequencia() {
    const canvas = document.getElementById('grafico');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const freq = calcularFrequencia();
    const maxFreq = Math.max(...Object.values(freq));
    const scale = canvas.width / maxFreq;

    const alturaBarra = 20;
    let y = 5;

    for(let i=1; i<=25; i++) {
        const largura = freq[i] * scale;
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, y, largura, alturaBarra);
        ctx.fillStyle = 'black';
        ctx.fillText(`Número ${i}: ${freq[i]}`, largura + 5, y + 15);
        y += alturaBarra + 5;
    }
}

function mostrarFrequencia() {
    if(lotofacilData.length === 0) {
        alert('Aguarde dados carregarem...');
        return;
    }
    desenharGraficoFrequencia();
    document.getElementById('jogo-sugerido').textContent = '';
}

function mostrarRecente() {
    if(lotofacilData.length === 0) {
        alert('Aguarde dados carregarem...');
        return;
    }
    const freq = frequenciaRecente(50);
    let texto = 'Frequência últimos 50 concursos:
';
    for(let num=1; num<=25; num++) {
        texto += `Número ${num}: ${freq[num]} vezes
`;
    }
    alert(texto);
}

function mostrarSequenciaRep() {
    if(lotofacilData.length === 0) {
        alert('Aguarde dados carregarem...');
        return;
    }
    const rep = analiseSequenciaRepeticoes();
    const media = rep.reduce((a,b) => a + b, 0) / rep.length;
    alert(`Repetição média de números entre concursos sucessivos: ${media.toFixed(2)}`);
}

function mostrarFib() {
    const fibNums = filtroFibonacci();
    alert('Números frequentes próximos da sequência de Fibonacci:
' + fibNums.join(', '));
}

function gerarJogoFreq() {
    if(lotofacilData.length === 0) {
        alert('Aguarde dados carregarem...');
        return;
    }
    const freq = calcularFrequencia();
    let freqArr = [];
    for(let i=1; i<=25; i++) {
        freqArr.push([i, freq[i]]);
    }
    freqArr.sort((a,b) => b[1] - a[1]);
    const jogo = freqArr.slice(0, 15).map(x => x[0]).sort((a,b) => a-b);

    document.getElementById('jogo-sugerido').textContent = 'Jogo sugerido (mais frequentes): ' + jogo.join(', ');
}

function gerarJogoBal() {
    const jogo = gerarJogoBalanceado();
    document.getElementById('jogo-sugerido').textContent = 'Jogo sugerido balanceado par/ímpar: ' + jogo.join(', ');
}

window.onload = () => {
    carregarDados();
};