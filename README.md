# Levo um casaquinho?

## Descrição

Uma aplicação web simples que permite aos usuários inserir o nome de uma cidade e obter informações sobre a temperatura atual, máxima, mínima e a previsão para os próximos dias.

## Funcionalidades

- **Barra de pesquisa**: Os usuários podem inserir o nome de uma cidade para obter informações sobre o clima.
- **Informações do clima**: Após a pesquisa, a aplicação exibe informações sobre a temperatura atual, máxima e mínima da cidade selecionada.
- **Gráfico de previsão**: A aplicação também mostra um gráfico com a previsão de temperatura para os próximos dias.

## Tecnologias Utilizadas

- **React (com Vite)**: A aplicação foi construída usando React com a ferramenta de build Vite.
- **Styled Components**: Utilizado para estilização dos componentes.
- **Recharts**: Biblioteca utilizada para construção do gráfico de previsão.
- **OpenWeatherMap API**: API pública utilizada para obter os dados do clima.

## Estrutura do Projeto

- `src/components`: Contém todos os componentes React utilizados na aplicação.
  - `SearchBar`: Componente para inserir o nome da cidade e buscar informações.
  - `WeatherInfo`: Componente que exibe informações sobre a temperatura atual, máxima e mínima.
  - `WeatherChart`: Componente que exibe um gráfico com a previsão de temperatura para os próximos dias.
- `src/api`: Contém funções para fazer chamadas à API OpenWeatherMap.
- `src/GlobalStyles.ts`: Estilos globais e reset de estilos para a aplicação.

## Como Usar

1. **Clone o repositório**:
```bash
   git clone https://github.com/AnaLauraFFerraz/levo-um-casaquinho.git
```

2. **Instale as dependências**:
```bash
   npm install
```

3. **Execute o projeto**:
```bash
   npm run dev
```

4. Abra o navegador e acesse `http://localhost:3000`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

