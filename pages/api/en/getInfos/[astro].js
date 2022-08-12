// /api/en/getInfos/{req.query}
const AstroModel = require('../../../../database/models/Astro')
const En_Info = require('../../../../database/models/En_Info')

const handler = async (req, res) => {
    if (req.method === "GET") {
        const { astro } = req.query

        const data = await AstroModel.findOne({
            raw: true,
            where: { "en_name": astro },
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

        res.status(201).json(data)
    }
}

export default handler