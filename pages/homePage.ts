import {Selector,t} from 'testcafe';

class homePage {
    txtBox:Selector = Selector('#developer-name');
    btn : Selector = Selector('#submit-button');

    async sendText(textu: string){
        await t.typeText(this.txtBox,textu).click(this.btn);
    }
}

export const HomePage = new homePage();