import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.loginToSelectedLanguageInterface();
        // await expect(MainPage.flashAlert).toBeExisting();
        // await expect(MainPage.flashAlert).toHaveTextContaining('You logged into a secure area!');
        await expect(MainPage.navElement).toBeDisplayed();
        await MainPage.logout();
    });

});


