# Busca de usuários e seus repositórios da API do github

## Sobre o projeto

Esse projeto é um teste técnico para o processo seletivo da Compasso Uol

## Tecnologias

[React](https://reactjs.org/)

[Styled Components](https://styled-components.com/)

[Axios](https://www.npmjs.com/package/axios)

[react-router-dom](https://reactrouter.com/web/guides/quick-start)

[react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)


Esse projeto foi criado usando o Create react app [Create React App](https://github.com/facebook/create-react-app).


## Tarefa 

Gostaríamos nos entregasse uma aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:

Endpoint user: https://api.github.com/users/NOME_USUARIO

Endpoint repos: https://api.github.com/users/NOME_USUARIO/repos

Endpoint starred: https://api.github.com/users/NOME_USUARIO/starred

A aplicação deverá constituir três componentes principais:

O campo de busca.
Visualização de resultados.
Dois botões para executar um determinado resultado.
Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/NOME_USUARIO

Gostariamos de pesquisar por usuario.
Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.
Você poderá usar o framework css Bootstrap para construção dos componentes UI (Se preferir, os componentes poderão ser criados do zero, utilizando as boas práticas).

Você deverá usar o framework React para desenvolvimento da sua aplicação.

Você poderá utilizar Jest para testar os request feitos.


## Rodando o projeto

### Instalaçao

Instale usando o npm:
  ```sh
  npm install
  ```
### Rodando o projeto
Para iniciar o projeto:
  ```sh
  npm start
  ```
### Testes
Para rodar os testes da API, execute:
  ```sh
  npm test
  ```
