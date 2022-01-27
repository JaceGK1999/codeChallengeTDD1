// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven } from '../functions.js';

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

test('multiplyBySeven', (expect) => {
    const expect1 = 7;
    const expect2 = 35;
    const expect3 = 49;

    const actual1 = multiplyBySeven(1);
    const actual2 = multiplyBySeven(5);
    const actual3 = multiplyBySeven(7);

    expect.equal(actual1, expect1);
    expect.equal(actual2, expect2);
    expect.equal(actual3, expect3);
});

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });

test('multiply by twelve then halve', (expect) => {
    const expect1 = 6;
    const expect2 = 30;
    const expect3 = 60;

    const actual1 = multiplyBy12ThenHalve(1);
    const actual2 = multiplyBy12ThenHalve(5);
    const actual3 = multiplyBy12ThenHalve(10);

    expect.equal(actual1, expect1);
    expect.equal(actual2, expect2);
    expect.equal(actual3, expect3);

});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

