# Levo um casaquinho?

## Descrição

Uma aplicação web simples que permite aos usuários inserir o nome de uma cidade e obter informações sobre a temperatura atual, máxima, mínima e a previsão para os próximos dias.

link do deploy: https://forecast-nya.netlify.app/

## Funcionalidades

- **Barra de pesquisa**: Os usuários podem inserir o nome de uma cidade para obter informações sobre o clima.
- **Informações do clima**: Após a pesquisa, a aplicação exibe informações sobre a temperatura atual, máxima e mínima da cidade selecionada.
- **Gráfico de previsão**: A aplicação também mostra um gráfico com a previsão de temperatura para os próximos dias.

## Tecnologias Utilizadas

- **React (com Vite e TypeScript)**: A aplicação foi construída usando React com a ferramenta de build Vite.
- **Docker**: A aplicação possui deploy no DockerHub e docker-compose.yaml.
- **Styled Components**: Utilizado para estilização dos componentes.
- **Recharts**: Biblioteca utilizada para construção do gráfico de previsão.
- **OpenWeatherMap API**: API pública utilizada para obter os dados do clima.

## Como Usar
###### Primeiro de tudo você vai precisar de uma chave api do [OpenWeatherMap](https://openweathermap.org), crie uma conta no site e gere a sua chave para a versão 2.5
### Desenvolvimento
1 - **Clone o repositório**:
```bash
git clone https://github.com/Nyantise/forecast.git
```

2 - **Instale as dependências.**:
```bash
npm install
```

3 - **copie o arquivo .env.example:**:
```bash
cp .example .env
```
4 - **Adicione sua chave da API à variável VITE_API_KEY.**:

5 - **Execute o projeto em modo de desenvolvimento.**:
```bash
npm run dev
```

6 - Abra o navegador e acesse `http://localhost:5173`.

<br>

### Deploy

**Se houver clonado o repositorio do git, execute o docker compose:**
```bash
docker compose up -d
```
Pronto, agora sempre que quiser servir o app:
```bash
docker compose start
# e para parar:
docker compose stop
```

 **Ou, baixe o container do DockerHub**
```bash
docker run -d --name forecast -p 8080:80 nyantise/forecast:0.0.4
```

