// /api/br/getInfos/{req.query}
const AstroModel = require('../../../../database/models/Astro')
const Pt_Info = require('../../../../database/models/Pt_Info')

const handler = async (req, res) => {
    if (req.method === "GET") {

        const { astro } = req.query
        const data = await AstroModel.findOne({
            raw: true,
            where: { "pt_name": astro },
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
        
        res.status(201).json(data)
    }
}

export default handler