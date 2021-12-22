import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import MySkylight from '../pageobjects/mySkylight.page';


describe('Skylight user role verification:', () => {

    let parentWindow;

    afterEach(async () => {
        await MainPage.usernameMenu.click();
        await MainPage.logout();
    });

    // it('C63955: should not display admin menu link for the user role', () => {
    //     LoginPage.loginToSelectedLanguageInterface();
    //     MainPage.usernameMenu.click();
    //     expect(MainPage.adminButton.isDisplayed()).toBeFalsy();
    // });

    it('C18663: should allow user guide download for user role', async () => {
        await LoginPage.loginToSelectedLanguageInterface();
        await MainPage.usernameMenu.click();
        await MySkylight.userGuideButton.click();

        parentWindow = MainPage.switchToNewBrowserTab(await browser.getWindowHandles());
        // await expect(await browser.getUrl() === await MainPage.getExpectedUserGuideUrl(browser));
        // await expect(await browser.getTitle()).not.toHaveTextContaining('500 Internal Server Error');
        // await expect(await browser.getPageSource()).not.toMatch(/err|ERR/);

        await browser.closeWindow();
        await browser.switchToWindow(parentWindow);
    });

    // it('C177267: should provide access to a Spanish-language user guide', () => {
    //     LoginPage.loginToSelectedLanguageInterface('es');
    //     MainPage.usernameMenu.click();
    //     expect(MySkylight.userGuideLink.getAttribute('href')).toContain('Skylight_Conservation_Alerting_Platform_User_Guide_SPANISH.pdf');
    // });

});
