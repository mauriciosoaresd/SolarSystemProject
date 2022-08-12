import AstroSection from '../../../components/AstroSection'

const AstroDetails = (props) => {
    return <AstroSection data={props.astroData}/>
}

export const getStaticPaths = async () => {
    const data = await fetch(`http://localhost:3000/api/br/getPaths`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (res) => res.json())

    return {
        fallback: false,
        paths: data.map((astro) => (
            { params: { astroName: astro.pt_name } }
        ))
    }
}

export const getStaticProps = async (ctx) => {
    const data = await fetch(`http://localhost:3000/api/br/getInfos/${ctx.params.astroName}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (res) => res.json())

    return {
        props: { astroData: data }
    }
}

export default AstroDetails