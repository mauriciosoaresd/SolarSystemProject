import Jumbotron from "../../components/Jumbotron/index"
import HomeContent from "../../components/HomeContent"
import languagesObject from "../../utils/languagesObject"

const Home = ({ astros, solarSystem }) => {

  return (<>
    <main>
      <Jumbotron data={languagesObject.pt} astros={astros} />
    </main>
    <HomeContent data={solarSystem} wikiText={"Leia mais: "}/>
  </>)
}

export const getStaticProps = async (context) => {
  const data = await fetch(`${process.env.DOMAIN}api/br/getAstros`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => res.json())

  return {
    props: { ...data }
  }

}


export default Home