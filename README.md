
<h1 align="center">
<a href="https://spotiutils.herokuapp.com/">
  <img style="border-radius: 40px; height: 140px"alt="SpotiUtils" title="SpotiUtils" src="./public/imgs/logo.png" />
  </a>
</h1>

<h1 align="center">
    <a href="https://spotiutils.herokuapp.com/">🔗SolarSystem</a>
</h1>

<p align="center">🚀Website project to spread information about our solar system</p>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#setup">Setup</a> • 
 <a href="#built-with">Built With</a> • 
 <a href="#author">Author</a>
</p>

<!-- GIF SHOW CASE MOBILE -->
<p align="center">
    <img width="250" style="border-radius: 5px" height="450" src="./README/mobile.gif" alt="Intro">
</p>

*Read this in other languages: [Portuguese](README.pt.md)*

#### Features

- [x] Solar system introduction card
- [x] Astros pages
- [x] Wikipedia API to fetch content
- [x] Language selection
    - English
    - Portuguese


## Setup

These instructios will get you a copy of the project up and running on your local machine. 

#### Create database

Follow the instructions to get the Heroku PostgreSQL connection link: [here](https://devcenter.heroku.com/articles/heroku-postgresql).


#### Installing

 *If you already have the Node.js and npm installed, you can skip the step below.*
 

**Installing Node.js and npm**

To run the App, you'll need to have the Node.js and  npm installed on your machine, if you don't have Node.js and npm installed yet, you can follow the following steps to install both:

 * Installing Node.js and npm on macOS and Windows environment: [here](https://nodejs.org/en/download/).
 * Installing Node.js and npm on Ubuntu environment: [here](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/).

 **Fill .env.local file with your variables**
```
DATABASE_URL=<postgresql connection URI>
```


#### Running the App

**Cloning the repository**
```
$ git clone https://github.com/mauriciosoaresd/SolarSystemProject && cd SolarSystemProject
```

**Installing project dependencies**
```
$ npm install
```

After cloning the repository and enter on the directory, you just need to run the following commands:

**Filling PostgreSQL database**
```
node ./database/index.js
```

**Building Project**
```
npm run build
```

**Running the App**
```
$ npm start
```

You can access server by the port:3000 - <http://localhost:3000>

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Heroku](https://www.heroku.com/)
- [Sequelize](https://sequelize.org/)
- [Wikipedia API wrapper](https://www.npmjs.com/package/wikipedia)

### Author
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/55855981?v=4" width="100px;" alt=""/>

 <sub><b>Maurício Domingues</b></sub>

 [![Gmail badge](https://img.shields.io/badge/-mauriciosoaresd@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white&link=mailto:mauriciosoaresd@gmail.com)](mailto:mauriciosoaresd@gmail.com) [![Linkedin Badge](https://img.shields.io/badge/-Maurício-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mauriciosdomingues/)](https://www.linkedin.com/in/mauriciosdomingues/) 



## License

This project is under the license [MIT](./LICENSE).