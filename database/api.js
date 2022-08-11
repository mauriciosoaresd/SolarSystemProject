const wiki = require('wikipedia')

module.exports = async function (astrosEn, astrosPt) {
    const delay = (ms = 1500) => new Promise(r => setTimeout(r, ms))

    const getDataSeries = async (items, lang) => {
        let results = []
        wiki.setLang(lang)

        for (let index = 0; index < items.length; index++) {
            await delay()

            const intro = await wiki.page(items[index].wiki)
                .then(page => page.intro())

            results.push({ name: items[index].name, "intro": intro });
        }
        return results
    }

    return await getDataSeries(astrosEn, "en")
        .then(async (englishData) => {
            const portugueseData = await getDataSeries(astrosPt, "pt")
            return { "en": englishData, "pt": portugueseData }
        })
}
