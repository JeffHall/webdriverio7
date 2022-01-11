describe('Google Analytics events', () => {


    it('should listen on network events', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://sc-production.skylight.earth/login?captcha=false')
    })

})
