export default class Page {

    open(path) {
        return browser.url(`https://sc-integration.skylight.earth/${path}`)
    }
}
