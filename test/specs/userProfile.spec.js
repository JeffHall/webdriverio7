import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import UserProfilePage from '../pageobjects/userProfile.page';

beforeEach(async () => {
    await LoginPage.loginToSelectedLanguageInterface();
    await MainPage.usernameMenu.click();
    await MainPage.userProfileOption.click();
});

afterEach(async () => {
    await MainPage.logout();
});

describe('Skylight User Profile page', () => {

    const defaultTimeZone = 'Etc/Greenwich';
    const userSelectedTimeZone = 'America/Los_Angeles';

    it('C149977: should provide access to OneTrust configuration via "Cookie Settings"', async () => {
        await UserProfilePage.cookieSettingsButton.click();
        await browser.pause(500);

        await expect(LoginPage.oneTrustModalTitle).toHaveTextContaining('Privacy Preference Center');
        await LoginPage.oneTrustModalCloseButton.click();
        await UserProfilePage.mySkylightMenu.click();
    });

    // it('C176060: should default Time Zone setting to Greenwich Mean Time (GMT)', () => {
    //     expect(UserProfilePage.timeZoneMenu.isDisplayed()).toBeTruthy();
    //     expect(UserProfilePage.timeZoneMenu.getValue()).toEqual(defaultTimeZone);
    //     expect(UserProfilePage.instructionalText[2].getText()).toEqual('Note: Changing the time zone will change the display only; dates and times in the downloaded data will be displayed in GMT');
    //     UserProfilePage.mySkylightMenu.click();
    // });
    //
    // it('C176059: should allow user to change time zone associated with their login', () => {
    //     UserProfilePage.timeZoneMenu.click();
    //     UserProfilePage.timeZoneSelection(userSelectedTimeZone);
    //     UserProfilePage.timeZoneSaveButton.click();
    //     UserProfilePage.successMessageCloseButton.click();
    //
    //     // Navigate away from and back to User Profile page to verify persistence of Time Zone selection.
    //     UserProfilePage.skylightLogo.click();
    //     MainPage.usernameMenu.click();
    //     MainPage.usernameMenu.waitForDisplayed();
    //     MainPage.userProfileOption.click();
    //     expect(UserProfilePage.timeZoneMenu.getValue()).toEqual(userSelectedTimeZone);
    //     UserProfilePage.mySkylightMenu.click();
    // });
    //
    // it('C176061: should display selected time zone on the date picker', () => {
    //     UserProfilePage.skylightLogo.click();
    //     MainPage.datePicker.click();
    //     expect(MainPage.dateRangeTimeZone.getText()).toContain(userSelectedTimeZone);
    // });
    //
    // it('C176062: should persist user-selected time zone between sessions', () => {
    //     expect(UserProfilePage.timeZoneMenu.getValue()).toEqual(userSelectedTimeZone);
    //     UserProfilePage.mySkylightMenu.click();
    // });

});