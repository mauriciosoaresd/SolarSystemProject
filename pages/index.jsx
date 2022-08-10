import Jumbotron from "../components/Jumbotron/index"
import HomeContent from "../components/HomeContent"
import languagesObject from "../languagesObject"

const Home = ({ astros, solarSystem }) => {

  return (<>
    <main>
      <Jumbotron data={languagesObject.en} astros={astros} />
    </main>
    {/* BUTTON DOWN NO JUMBOTRON */}
    {/* MOVE CSS FROM GLOBAL TO MODULES */}
    <HomeContent data={solarSystem} />
  </>)
}

export const getStaticProps = async (context) => {
  const Op = require("sequelize").Op
  const AstroModel = require('../database/models/Astro')
  const En_Info = require('../database/models/En_Info')
  const data = { astros: [], solarSystem: {} }

  await AstroModel.findAll({
    where: {
      en_name: {
        [Op.notLike]: 'Solar System'
      }
    },
    raw: true,
    attributes: ['en_name']
  })
    .then(astros => astros.map(astro => {
      data.astros.push({
        id: astro.en_name.toLowerCase(),
        name: astro.en_name,
      })
    })
    )

  await AstroModel.findOne({
    where: { 'en_name': 'Solar System' },
    raw: true,
    attributes: ['id', 'en_name', 'en_wiki']
  }).then(async (obj) => {
    data.solarSystem = {
      title: obj.en_name,
      wiki: `https://en.wikipedia.org/wiki/${obj.en_wiki}`,
      ... await En_Info.findOne({
        where: { id: obj.id },
        raw: true,
        attributes: ['info']
      })
    }
  })



  return {
    props: { ...data }
  }
}


export default Home