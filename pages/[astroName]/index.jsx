import AstroSection from '../../components/AstroSection'

const AstroDetails = (props) => {
    return <AstroSection data={props.astroData}/>
}

export const getStaticPaths = async () => {
    const AstroModel = require('../../database/models/Astro')

    const data = await AstroModel.findAll({ raw: true, attributes: ["en_name"] })
    return {
        fallback: false,
        paths: data.map((astro) => (
            { params: { astroName: astro.en_name } }
        ))
    }
}

export const getStaticProps = async (ctx) => {
    const AstroModel = require('../../database/models/Astro')
    const En_Info = require('../../database/models/En_Info')

    const data = await AstroModel.findOne({
        raw: true,
        where: { "en_name": ctx.params.astroName },
        attributes: ['id', 'en_name', 'en_wiki']
    }).then(async (data) => {
        let info = await En_Info.findOne({
            raw: true,
            where: { "id": data.id },
            attributes: ['info']
        })

        return { 
            id: data.en_name.toLowerCase(),
            name: data.en_name,
            wiki: `https://en.wikipedia.org/wiki/${data.en_wiki}`,
            ...info
        }
    })

    return {
        props: { astroData: data }
    }
}

export default AstroDetails