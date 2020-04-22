import { Selector } from 'testcafe';
import { RequestMock } from 'testcafe';
const searchTextBox = Selector('input').withAttribute('name', 'q');


fixture
.disablePageCaching
 `Sample Test`   //Navigation to page element
.beforeEach( async t => {
    t.ctx.tempText = 'Praga';
})

test('google',async t =>{
await t
.maximizeWindow();
await t.resizeWindow(350, 750);
await t.eval(() => location.reload(true));
await t
//.debug() //debugging
.typeText(searchTextBox, t.ctx.tempText).setTestSpeed(0.1)
.expect(searchTextBox.value).contains('Praga')
}).page('https://www.google.com');
