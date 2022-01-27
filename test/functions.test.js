// IMPORT MODULES under test here:
import { 
    myFunction, addExclamationPoints, 
} from '../functions.js';

const { test, skip } = QUnit;

test('adding exclamation points', (expect) => {
    const expected = 'Bunny rabbit!!!';

    const actual = addExclamationPoints('Bunny rabbit');

    expect.equal(actual, expected);

});

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

