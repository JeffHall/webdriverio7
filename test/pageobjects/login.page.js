import Page from './page';

class LoginPage extends Page {

    get btnSubmit() {
        return $('.login .btn.primary');
    }

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get oneTrustAcceptAllCookiesButton() {
        return $('#onetrust-button-group #onetrust-accept-btn-handler');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loginToSelectedLanguageInterface(language = 'en', username = browser.config.username, password = browser.config.password) {
        this.open('&language=' + language);
        browser.pause(1000);

        // Click 'Accept' on the OneTrust cookie banner
        await this.oneTrustAcceptAllCookiesButton.click();
        console.log(`Logging in as ${username}`);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
