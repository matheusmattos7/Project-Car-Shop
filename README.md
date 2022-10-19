# Projeto Blogs API

Projeto backend feito para treinarmos o conteúdo de Hard Skills do curso da trybe.

O Projeto consiste de uma criação de uma API rest para uma concessionária de carros utilizando a arquitetura MSC, onde teremos as principais funções de um CRUD, e que as rotas disponíveis ficarão melhor exemplificadas no tópico de [EndPoints](#endpoints).

# Habilidades

- Realizar a implementação do Docker.
- Modelar dados com **MongoDB**;
- Criação e utilização de Interfaces;
- Utilização de TypeScript para criar nosso **CRUD**;
- Construir uma **API REST** com endpoints para consumir os models criados;

# Tecnologias utilizadas

Node.js, Docker, TypeScript, MongoDB, Arquitetura MSC.

## Orientação

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### Rodando a aplicação

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
 
  ## 👉 Com Docker
  
  1. Clone o repositório:
  
  ```
  git clone git@github.com:matheusmattos7/Project-Car-Shop.git
  ```
  
  2. Inicie a aplicação:
  
  ```
  docker-compose up -d --build
  ```
  3. A aplicação estará rodando na porta 3001, portanto, basta acessá-la em: http://localhost:3001
  
  4. Caso queira parar a aplicação execute o comando 
  
  ```
  docker-compose down
  ```
  ## Caso não tenho o banco MongoDB instalado
  Caso não tenha o MongoDB instalado em sua máquina e deseje usar o Docker, é só seguir os passos a seguir:

  1. Baixe a imagem do MongoDB:

  ```sh
  docker pull mongo
  ```

  2. Crie o contêiner do MongoDB:

  ```sh
  docker run --name <nome-do-container> -p 27017:27017 -d mongo
  ```

  3. Confira se o contêiner está rodando:

  ```sh
  docker ps
  ```
  ## 👉 Sem Docker

  1. Clone o repositório:
  
  ```
  git clone git@github.com:matheusmattos7/Project-Car-Shop.git
  ```
  2. Instale as dependências da aplicação:
  
  ```
  npm install
  ```
  3. Inicie a aplicação com o comando:
  
  ```
  npm start
  ```
  4. A aplicação estará rodando na porta 3001, portanto, basta acessá-la em: http://localhost:3001
  
  <br/>
</details>

### EndPoints

<details>
<summary><strong>Resumo sobre os endpoints</strong></summary>

- POST `/cars` que deve receber no body os campos `model`, `year`, `color`, `buyValue`, `seatsQty` e `doorsQty`.
- GET `/cars` que retorna todos os carros cadastrados.
- GET `/cars/:id` que retorna o carro pertencente ao id passado por parâmetro.
- PUT `/cars/:id` que pode atualizar os parâmetros do carro pertencente ao id passado por parâmetro.
- DELETE `/cars/:id` que é possível deletar o carropertencente ao id passado por parâmetro.

</details>

---
Construído por [Matheus mattos](https://gist.github.com/matheusmattos7) no curso de desenvolvimento web da Trybe.
