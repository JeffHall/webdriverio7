import Page from './page';

class UserProfilePage extends Page {

    get editButton() {
        return $('.profile-content .edit-btn');
    }

    get cookieSettingsButton() {
        return $('.profile-content .ot-sdk-show-settings');
    }

    get skylightLogo() {
        return $('.profile-page .header .title');
    }

    get mySkylightMenu() {
        return $('.profile-page .header .title');
    }

    get successMessageCloseButton() {
        return $('.profile-page .skylightAlert .closeButton');
    }

    get instructionalText() {
        return $$('.profile-content-inner small');
    }

    get timeZoneMenu() {
        return $('#timeZone');
    }

    get timeZoneSaveButton() {
        return $('button.button\\.module__btn.button\\.module__primary.btn.primary');
    }

    timeZoneSelection(selection) {
        this.timeZoneMenu.selectByAttribute('value', selection)
    }

    open() {
        super.open('userprofile');
        this.waitForPageToLoad();
    }

    waitForPageToLoad() {
        this.editButton.waitForDisplayed();
    }
}

export default new UserProfilePage();
