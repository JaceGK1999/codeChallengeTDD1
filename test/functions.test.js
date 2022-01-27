// IMPORT MODULES under test here:
import { addExclamationPoints } from '../functions.js';

const { test, skip } = QUnit;

test('adding exclamation points', (expect) => {
    const expectedBunny = 'Bunny rabbit!!!';
    const expectedJace = 'Jace!!!';
    const expectedDenver = 'Denver!!!';

    const actual = addExclamationPoints('Bunny rabbit');
    const actual1 = addExclamationPoints('Jace');
    const actual2 = addExclamationPoints('Denver');

    expect.equal(actual, expectedBunny);
    expect.equal(actual1, expectedJace);
    expect.equal(actual2, expectedDenver);
    
});

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

