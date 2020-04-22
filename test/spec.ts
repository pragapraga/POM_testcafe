import {HomePage} from '../model/homePage';
import {LadingPage} from '../model/landingPage';

fixture `Sample Test`
.page('https://devexpress.github.io/testcafe/example/')    //Navigation to page element
.beforeEach( async t => {
    t.ctx.tempText = 'Praga';
   
})
.afterEach( async t => {
    t.ctx.number = '123';
}) 

test('Basic Page Test', async t =>{
await HomePage.sendText('Pragadeeswaran');
console.log(typeof(t.ctx.tempText));
await t 
    .expect(LadingPage.getText()).contains(t.ctx.tempText); //assertion
    
});

test.skip('Fail Test', async testcontroller=>{ //skipping the test
    await testcontroller
    .expect({ a: 'bar' }).eql({ a: 'goo' }, 'this assertion will fail');
});

test('Fail Test', async testcontroller=>{ //skipping the test
    await testcontroller
    .expect({ a: 'bar' }).eql({ a: testcontroller.ctx.number }, 'this assertion will fail');
}).page('https://www.google.com');