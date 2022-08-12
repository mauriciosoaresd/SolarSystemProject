// /api/br/getAstros
const Op = require("sequelize").Op
const AstroModel = require('../../../database/models/Astro')
const Pt_Info = require('../../../database/models/Pt_Info')

const handler = async (req, res) => {
    if (req.method === "GET") {
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
            where: { 'pt_name': 'Sistema Solar' },
            raw: true,
            attributes: ['id', 'pt_name', 'pt_wiki']
        }).then(async (obj) => {
            data.solarSystem = {
                title: obj.pt_name,
                wiki: `https://pt.wikipedia.org/wiki/${obj.pt_wiki}`,
                ... await Pt_Info.findOne({
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