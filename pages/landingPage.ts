import { Selector, t } from 'testcafe';

class landingPage {
    txtContent: Selector = Selector('#article-header');

    getText() {
        return Selector(this.txtContent).innerText;
    }

}

export const LadingPage = new landingPage();
