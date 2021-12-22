import Page from './page';

class MainPage extends Page {

    getExpectedUserGuideUrl() {
        return process.env.SKYLIGHT_WEB_URL + '/api/help/conservation-user-guide';
    }

    get logoutButton() {
        return $('#root > div > div.header > span > div > div.myskylight-menu-item');
    }

    get navElement() {
        return $('div.nav');
    }

    get usernameMenu() {
        return $('.main-page .header .userName');
    }

    get userProfileOption() {
        return $('.userName .dropdownMenu').$('a=User Profile');
    }

    async logout() {
        console.log('Logging out...');
        await this.usernameMenu.scrollIntoView();
        await this.usernameMenu.click();
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
        await browser.pause(1000);
    }

    async switchToNewBrowserTab(windowHandles) {
        const parentWindow = windowHandles[0];
        const childWindow = windowHandles[1];
        await browser.switchToWindow(childWindow);
        return parentWindow;
    }
}

export default new MainPage();
