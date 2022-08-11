// Run it to fill database index.js
(async () => {
    const fs = require('fs');

    const astros = require('./data/astros.json')
    const api = require('./api')
    const database = require('./db')

    const AstroModel = require('./models/Astro')
    const En_Info = require('./models/En_Info')
    const Pt_Info = require('./models/Pt_Info')

    AstroModel.hasOne(En_Info)
    AstroModel.hasOne(Pt_Info)

    try {
        // force: true - Recreates and fills tables

        // const db = await database.sync({ force: true })
        const db = await database.sync()

        // Fill Astro Table
        const astrosArr = astros.astros.map(obj => {
            return {
                "en_name": obj.en_name,
                "en_wiki": obj.en_wiki,
                "pt_name": obj.pt_name,
                "pt_wiki": obj.pt_wiki
            }
        })
        AstroModel.bulkCreate(astrosArr).catch(e => console.error(e))


        // Fetch wiki data pt/en
        const ptArr = astros.astros.map(obj => {
            return { name: obj.pt_name, wiki: obj.pt_wiki }
        })

        const enArr = astros.astros.map(obj => {
            return { name: obj.en_name, wiki: obj.en_wiki }
        })

        api(enArr, ptArr)
            .then(wikiData => createWikiArr(wikiData.en, wikiData.pt))
            .then(x => {
                En_Info.bulkCreate(x.enArr)
                Pt_Info.bulkCreate(x.ptArr)
            })
        
        // Fill Info tables
        const createWikiArr = async (enData, ptData) => {
            const enArr = await Promise.all(enData.map(async (astro) => await AstroModel.findOne({ where: { en_name: astro.name } })
                .then(ast => { return { id: ast.id, info: astro.intro } })
            ))

            const ptArr = await Promise.all(ptData.map(async (astro) => await AstroModel.findOne({ where: { pt_name: astro.name } })
                .then(ast => { return { id: ast.id, info: astro.intro } })
            ))
            return { enArr, ptArr }
        }


    } catch (error) {
        console.log(error);
    }

})();