<h1 align="center">Wather App</h1>

<h3 align="center">Projeto de uma aplicação single page que pega sua localização para trazer previsões do tempo</h3>

## 💻 Sobre o projeto

Wather App - é uma aplicação que pega sua localização para trazer previsões do tempo, foi desenvolvido com Next.js, TailwindCSS e Typescript
---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/) ou [Docker](https://www.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
E também é necessário renomear o arquivo .env.example para .env

#### 🎲 Rodando sem Docker

<details>

```bash

# Clone este repositório
$ git clone https://github.com/serjofrancisco/WeatherForecast

# Acesse a pasta do projeto no terminal
$ cd WeatherForecast

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará na porta:3000 - acesse http://localhost:3000

```

</details>

#### 🎲 Rodando com Docker

<details>

```bash

# Clone este repositório
$ git clone https://github.com/serjofrancisco/WeatherForecast

# Acesse a pasta do projeto no terminal
$ cd WeatherForecast

# Suba o container
$ docker-compose up -d

# A aplicação inciará na porta:3000 - acesse http://localhost:3000

```

</details>

#### 🎲 Rodando testes

<details>

```bash
# Necessário Node.JS
  
# Clone este repositório
$ git clone https://github.com/serjofrancisco/WeatherForecast

# Acesse a pasta do projeto no terminal
$ cd WeatherForecast

# Rode os testes
$ npm test
  
# Para testar a cobertura
$ npm run coverage

```

</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.js](https://nodejs.org/en/)**
- **[ESLint](https://eslint.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Docker](https://www.docker.com/)**
- **[Next.js](https://nextjs.org/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[Dayjs](https://day.js.org/)**
- **[RTL](https://testing-library.com/)**
- **[Jest](https://jestjs.io/)**

> Veja o arquivo  [package.json](https://github.com/serjofrancisco/WeatherForecast/blob/main/package.json)
