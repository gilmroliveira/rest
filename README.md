# Projeto Lotofácil - Análises e Geração de Jogos

Este projeto é uma aplicação 100% frontend para análise estatística, visualização e geração de jogos para a Lotofácil, utilizando dados históricos completos convertidos do formato Excel para JSON. O projeto é hospedado via GitHub Pages e roda inteiramente no navegador, sem necessidade de backend.

## Funcionalidades

- Visualização gráfica da frequência de cada número sorteado historicamente.
- Análise de frequência dos últimos 50 concursos.
- Análise de repetição média de números entre concursos sucessivos.
- Identificação de números frequentes próximos da sequência de Fibonacci.
- Geração de jogos com base nos números mais frequentes.
- Geração de jogos balanceados com quantidade equilibrada de números pares e ímpares.
- Interface simples e interativa com botões para acessar cada funcionalidade.

## Estrutura do Projeto

- `index.html`: Página principal da aplicação.
- `app.js`: Código JavaScript com a lógica das análises e geração de jogos.
- `style.css`: Estilos para a interface da página.
- `lotofacil_data.json`: Dados históricos da Lotofácil em formato JSON para uso no frontend.

## Como Usar

1. Clone o repositório ou faça o download dos arquivos.
2. Publique os arquivos no GitHub no seu repositório, configurando o GitHub Pages para a branch principal, com raiz do projeto como fonte.
3. Acesse a URL do GitHub Pages fornecida para rodar a aplicação no navegador.
4. Utilize os botões para visualizar análises e gerar jogos de forma interativa.

## Conversão dos Dados

O arquivo `lotofacil_data.json` foi gerado a partir dos dados históricos em Excel (arquivo `Lotofacil.xlsx`) usando Python para converter os dados relevantes aos formatos JSON adequados para o browser.

## Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript ES6 para frontend.
- GitHub Pages para hospedagem estática.
- JSON para armazenamento e acesso aos dados históricos.

## Possíveis Melhorias Futuras

- Adição de mais análises estatísticas e probabilísticas baseadas em padrões dos jogos.
- Inclusão de filtros customizados para geração automática de jogos.
- Implementação de gráficos mais avançados e interativos.
- Adição de documentação técnica detalhada e instruções para contribuidores.
