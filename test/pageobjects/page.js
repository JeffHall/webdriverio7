export default class Page {

    open(path) {
        return browser.url(`https://sc-production.skylight.earth/${path}`)
    }
}
