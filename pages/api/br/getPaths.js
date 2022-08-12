// /api/br/getPaths
const AstroModel = require('../../../database/models/Astro')

const handler = async (req, res) => {
    if (req.method === "GET") {
        const data = await AstroModel.findAll({ raw: true, attributes: ["pt_name"] })

        res.status(201).json(data)
    }
}

export default handler