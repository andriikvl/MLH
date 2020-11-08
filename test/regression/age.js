import {inputValues4AndClick} from "../../helpers/methods";
import {age, gender, name, story, ageErrors} from "../../data/testData";
const sel = require('../../data/selectors.json');
const ageValue = age.number1;
const exp = require('../../data/expected.json');

describe('AGE REGRESSION', () => {
    before(() => {
        browser.url('');
        browser.maximizeWindow();

    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('AGE POSITIVE', () => {
        it('Check that we able to change the value +1 by clicking spinner up', function () {
            $(sel.age).setValue(ageValue);
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual((ageValue + 1) + '');
        });

        it('Check that we able to change the value -1 by clicking spinner down', function () {
            $(sel.age).setValue(ageValue);
            $(sel.spinnerAgeDown).click();
            expect($(sel.age).getValue()).toEqual((ageValue - 1) + '');
        });

        it('Check that get the value: 1 by clicking spinner up', function () {
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual(exp.one);
        });

        it('Verify that the age field accepts 12 symbols', function () {
            $(sel.age).setValue(age.number3);
            expect($(sel.errorMessage).isDisplayed()).not.toEqual(true);
        });

        it('Verify that the age field accepts 1 digit', function () {
            $(sel.age).setValue(age.number4);
            expect($(sel.errorMessage).isDisplayed()).not.toEqual(true);
        });

        it('Verify that if input value is longer than a 12-digit integer, error message appears', function () {
            $(sel.age).setValue(age.number5);
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

    });
});
