
<h1 align="center">
<a href="https://solar-system-project.vercel.app/">
  <img style="border-radius: 40px; height: 140px"alt="Solar System Project" title="Solar System Project" src="./public/imgs/logo.png" />
  </a>
</h1>

<h1 align="center">
    <a href="https://solar-system-project.vercel.app/">🔗SolarSystem</a>
</h1>

<p align="center">🚀Projeto de website para espalhar informações sobre nosso sistema solar</p>

<p align="center">
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#configurar">Configurar</a> • 
 <a href="#feito-com">Feito com</a> • 
 <a href="#autor">Autor</a>
</p>

<p align="center">
    <img width="250" style="border-radius: 5px" height="450" src="./mobile.gif" alt="Intro">
</p>

*Leia em outros idiomas: [English](README.md)*

#### Funcionalidades

- [x] Card introdutório
- [x] Página de astros
- [x] Requisições pela WikipediaAPI
- [x] Seletor de linguagem
    - Inglês
    - Português


## Configurar

Estas instruções te darão uma cópia do projeto rodando na sua maquina local 

#### Criar banco de dados

Siga as instruções para conseguir o link de conexão com o Heroku PostgreSQL: [here](https://devcenter.heroku.com/articles/heroku-postgresql).


#### Instalando

 *Se você já tem Node.js e npm instalados pule esta parte.*


**Instalando Node.js e npm**

Para rodar o App você deverá ter Node.js e npm instalados na sua máquina. Siga os passos abaixo para instalar ambos:

 * Instalação do Node.js e npm no macOs e Windows: [here](https://nodejs.org/pt-br/download/)
 * Instalação do Node.js e npm no Ubuntu: [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt)

 **Preencha o arquivo .env com suas variáveis**
```
DATABASE_URL=<postgresql connection URI>
```


#### Rodando o App

**Clonando o repositório**
```
$ git clone https://github.com/mauriciosoaresd/SolarSystemProject && cd SolarSystemProject
```

**Instalando as dependências do projeto**
```
$ npm install
```

Após clonar o repositório e entrar em sua pasta, rode as linhas de terminal abaixo: 

**Preenchendo banco de dados PostgreSQL**
```
node ./database/index.js
```

**Compilar projeto**
```
npm run build
```

**Rodar servidor Express**
```
$ node server.js
```
Você pode acessar o servidor pela porta:3001 - <http://localhost:3001>

### Feito com

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/pt-br/)
- [Bootstrap](https://getbootstrap.com.br/)
- [Vercel](https://vercel.com/)
- [Heroku](https://www.heroku.com/)
- [Sequelize](https://sequelize.org/)
- [Wikipedia API wrapper](https://www.npmjs.com/package/wikipedia)


### Autor
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/55855981?v=4" width="100px;" alt=""/>

 <sub><b>Maurício Domingues</b></sub>

 [![Gmail badge](https://img.shields.io/badge/-mauriciosoaresd@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white&link=mailto:mauriciosoaresd@gmail.com)](mailto:mauriciosoaresd@gmail.com) [![Linkedin Badge](https://img.shields.io/badge/-Maurício-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mauriciosdomingues/)](https://www.linkedin.com/in/mauriciosdomingues/) 



## License

Este projeto está licenciado nos termos da licença [MIT](./LICENSE).