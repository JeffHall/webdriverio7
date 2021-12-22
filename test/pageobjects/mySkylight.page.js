import Page from './page';

class MySkylightPagePage extends Page {

    get userGuideButton() {
        return $('.myskylight-menu-item[href="https://skylight.global/Custom/Support/conservation-user-guide.pdf"]');
    }

}

export default new MySkylightPagePage();