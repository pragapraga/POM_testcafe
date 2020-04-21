import {HomePage} from '../model/homePage';
import {LadingPage} from '../model/landingPage';

fixture `Sample Test`
.page('https://devexpress.github.io/testcafe/example/');

test('Basic Page Test', async t =>{
await HomePage.sendTexty('Pragadeeswaran');
await t 
    .expect(LadingPage.getText()).contains('Pragadeeswaran');
});

test.skip('Fail Test', async testcontroller=>{
    await testcontroller
    .expect({ a: 'bar' }).eql({ a: 'goo' }, 'this assertion will fail');
});
