import Jumbotron from "../../components/Jumbotron/index"
import HomeContent from "../../components/HomeContent"
import languagesObject from "../../languagesObject"

const Home = ({ astros, solarSystem }) => {

  return (<>
  <main>
    <Jumbotron data={languagesObject.pt} astros={astros} />
  </main>
    {/* BUTTON DOWN NO JUMBOTRON */}
    
    {/* LANGUAGEOBJECT.JS 'READ MORE'/'LEIA MAIS' */}

    <HomeContent data={solarSystem} />

  </>)
}

export const getStaticProps = async (context) => {
  const Op = require("sequelize").Op
  const AstroModel = require('../../database/models/Astro')
  const Pt_Info = require('../../database/models/Pt_Info')
  const data = { astros: [], solarSystem: {} }

  await AstroModel.findAll({
    where: {
      pt_name: {
        [Op.notLike]: 'Sistema Solar'
      }
    },
    raw: true,
    attributes: ['en_name', 'pt_name']
  })
    .then(astros => astros.map(astro => data.astros.push({ id: astro.en_name.toLowerCase(), name: astro.pt_name }))
    )

    await AstroModel.findOne({
      where: {'pt_name': 'Sistema Solar'},
      raw: true,
      attributes: ['id', 'pt_name', 'pt_wiki']
    }).then(async (obj) => {
       data.solarSystem = {
        title: obj.pt_name,
        wiki: `https://pt.wikipedia.org/wiki/${obj.pt_wiki}`,
        ... await Pt_Info.findOne({
          where: {id: obj.id},
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