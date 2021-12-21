import Page from './page';

class MainPage extends Page {

    get logoutButton() {
        return $('#root > div > div.header > span > div > div.myskylight-menu-item');
    }

    get navElement() {
        return $('div.nav');
    }

    get usernameMenu() {
        return $('.main-page .header .userName');
    }

    async logout() {
        console.log('Logging out...');
        await this.usernameMenu.scrollIntoView();
        await this.usernameMenu.click();
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
        browser.pause(1000);
    }
}

export default new MainPage();
