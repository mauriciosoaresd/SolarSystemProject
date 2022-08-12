// /api/en/getAstros

const Op = require("sequelize").Op
const AstroModel = require('../../../database/models/Astro')
const En_Info = require('../../../database/models/En_Info')

const handler = async (req, res) => {
    if (req.method === "GET") {
        const data = { astros: [], solarSystem: {} }

        await AstroModel.findAll({
            where: {
                en_name: {
                    [Op.notLike]: 'Solar System'
                }
            },
            raw: true,
            attributes: ['en_name']
        }).then(astros => astros.map(astro => {
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

        res.status(201).json(data)
    }
}

export default handler