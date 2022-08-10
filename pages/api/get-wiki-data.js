// /api/get-wiki-data
const wiki = require('wikipedia')
import languagesObject from '../../languagesObject'



const handler = async (req, res) => {
    const astrosEn = languagesObject["en"].astros
    const astrosPt = languagesObject["pt"].astros


    if (req.method === "GET") {

        const delay = (ms = 1500) => new Promise(r => setTimeout(r, ms));

        const getDataSeries = async (items, lang) => {
            wiki.setLang(lang)
            let results = [];
            for (let index = 0; index < items.length; index++) {
                console.log(lang, " ", index)
                await delay();
                const intro = await wiki.page(items[index].wikiPage)
                    .then(page => page.intro())
                results.push({ name: items[index].name, "intro": intro });
            }
            return results;
        }

        let dataObj = await getDataSeries(astrosEn, "en")
            .then(async (englishData) => {
                const portugueseData = await getDataSeries(astrosPt, "pt")
                return { "en": englishData, "pt": portugueseData }
            })

        res.status(201).json(dataObj)
    }
}

export default handler