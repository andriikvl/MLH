
const sel = require('../data/selectors.json');
const path = require('path');


function inputValues4(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[storyType].click();
}

function inputValues4AndClick(name, gender, age, storyType) {
    inputValues4(name, gender, age, storyType)
    $(sel.submitButton).click();
}

function inputValues5AndClick (name, gender, age, storyType, image ){

        inputValues4(name, gender, age, storyType);

        browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = 'block';
        });
        const filePath = path.join(__dirname, image);
        const remoteFilePath = browser.uploadFile(filePath);

        $(sel.uploadImageLink).waitForDisplayed();

        $(sel.uploadImageLink).setValue(remoteFilePath);
        $(sel.submitButton).click();
    }


module.exports = {inputValues4, inputValues4AndClick, inputValues5AndClick};