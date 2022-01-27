// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem } from '../functions.js';

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

test('divide then multiply', (expect) => {
    const expect1 = 1;
    const expect2 = 5;
    const expect3 = 10;

    const actual1 = divideThenMultiply(1, 2, 2);
    const actual2 = divideThenMultiply(5, 5, 5);
    const actual3 = divideThenMultiply(10, 10, 10);

    expect.equal(actual1, expect1);
    expect.equal(actual2, expect2);
    expect.equal(actual3, expect3);
});


test('return numbers as an array', (expect) => {
    const expected1 = [1, 2, 3];
    const expected2 = [4, 5, 6];
    const expected3 = [7, 8, 9];

    const actual1 = returnAsAnArray(1, 2, 3);
    const actual2 = returnAsAnArray(4, 5, 6);
    const actual3 = returnAsAnArray(7, 8, 9);

    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);
});

test('return numbers as a string', (expect) => {
    const expected1 = '1, 2, 3';
    const expected2 = '4, 5, 6';
    const expected3 = '7, 8, 9';

    const actual1 = returnAsAString(1, 2, 3);
    const actual2 = returnAsAString(4, 5, 6);
    const actual3 = returnAsAString(7, 8, 9);

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('make a greeting', (expect) => {
    const expect1 = 'Hello! Your lucky number for the day is 12.';
    const expect2 = 'Hello! Your lucky number for the day is 42.';
    const expect3 = 'Hello! Your lucky number for the day is 36.';

    const actual1 = makeLuckyGreeting(12, 0);   
    const actual2 = makeLuckyGreeting(41, 1);   
    const actual3 = makeLuckyGreeting(30, 6);

    expect.equal(actual1, expect1);
    expect.equal(actual2, expect2);
    expect.equal(actual3, expect3);
});

test('pull second item from array', (expect) => {
    const expect1 = ('apple');
    const expect2 = ('banana');
    const expect3 = ('berry');

    const actual1 = getSecondItem(['banana ', 'apple', 'berry']);   
    const actual2 = getSecondItem(['apple', 'banana', 'berry']);   
    const actual3 = getSecondItem(['banana', 'berry', 'input']);

    expect.equal(actual1, expect1);
    expect.equal(actual2, expect2);
    expect.equal(actual3, expect3);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

