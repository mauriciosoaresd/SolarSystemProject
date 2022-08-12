import AstroSection from '../../components/AstroSection'

const AstroDetails = (props) => {
    return <AstroSection data={props.astroData}/>
}

export const getStaticPaths = async () => {
    const data = await fetch(`${process.env.DOMAIN}api/en/getPaths`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (res) => res.json())

    return {
        fallback: false,
        paths: data.map((astro) => (
            { params: { astroName: astro.en_name } }
        ))
    }
}

export const getStaticProps = async (ctx) => {
    const data = await fetch(`${process.env.DOMAIN}api/en/getInfos/${ctx.params.astroName}`, {
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