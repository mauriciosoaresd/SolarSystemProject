import AstroSection from '../../../components/AstroSection'

const AstroDetails = (props) => {
    return <AstroSection data={props.astroData} />
}

export const getStaticPaths = async () => {
    const AstroModel = require('../../../database/models/Astro')
    const data = await AstroModel.findAll({ raw: true, attributes: ["pt_name"] })

    return {
        fallback: false,
        paths: data.map((astro) => (
            { params: { astroName: astro.pt_name } }
        ))
    }
}

export const getStaticProps = async (context) => {
    const AstroModel = require('../../../database/models/Astro')
    const Pt_Info = require('../../../database/models/Pt_Info')

    const data = await AstroModel.findOne({
        raw: true,
        where: { "pt_name": context.params.astroName },
        attributes: ['id', 'en_name', 'pt_name', 'pt_wiki']
    }).then(async (data) => {
        let info = await Pt_Info.findOne({
            raw: true,
            where: { "id": data.id },
            attributes: ['info']
        })

        return {
            id: data.en_name.toLowerCase(),
            name: data.pt_name,
            wiki: `https://pt.wikipedia.org/wiki/${data.pt_wiki}`,
            ...info
        }
    })


    return {
        props: { astroData: data }
    }
}

export default AstroDetails