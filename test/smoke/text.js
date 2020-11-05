import {field, gender, story} from "../../data/helpers";
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('VERIFY TEXT IN LABELS, PLACEHOLDERS ARE CORRECT', ()=> {

    before(()=>{
        browser.url('');
        browser.maximizeWindow();
    });

    it("TC-001 Label for HEADER = My Little Hero", ()=> {
        expect($(sel.header).getText()).toEqual(exp.labelHeader);
    });

    it("TC-002 Label for subHEADER = Let's create your own HERO! It's super easy with our application!", ()=> {
        expect($(sel.subHeader).getText()).toEqual(exp.labelSubHeader);
    });

    it("TC-003 Label for name = 1. What is your Hero's name?", ()=> {
        expect($$(sel.label)[field.name].getText()).toEqual(exp.labelName);
    });

    it("TC-004  Text in Hero's name placeholder = Hero's name", ()=> {
        expect($(sel.name).getAttribute("placeholder")).toEqual(exp.NamePlaceholder);
    });

    it('TC-005 Label for gender name = 2. Please choose a gender.', ()=> {
        expect($$(sel.label)[field.gender].getText()).toEqual(exp.labelGender);
    });

    it('TC-006 Check radio button HE = he', ()=> {
        expect($$(sel.radioBtnText)[gender.HE].getText()).toEqual(exp.HE);
    });

    it('TC-007 Check radio button SHE = she', ()=> {
        expect($$(sel.radioBtnText)[gender.SHE].getText()).toEqual(exp.SHE);
    });

    it('TC-008 Check radio button IT = it', ()=> {
        expect($$(sel.radioBtnText)[gender.IT].getText()).toEqual(exp.IT);
    });

    it('TC-009 Label for age name = 3. How old is your Hero?', ()=> {
        expect($$(sel.label)[field.age].getText()).toEqual(exp.labelAge);
    });

    it("TC-010 Text in 3. How old is your hero? placeholder = Hero's age", ()=> {
        expect($(sel.age).getAttribute("placeholder")).toEqual(exp.AgePlaceholder);
    });

    it('TC-011 Label for story name = 4. What type of story would you like to read?', ()=> {
        expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
    });

    it('TC-012 Text in 4. What type of story would you like to read? placeholder = Type of the story', ()=> {
        expect($(sel.story).getText()).toEqual(exp.storyPlaceholder);
    });

    it('TC-013 Label for upload an image name = 5. Upload an image (optional).', ()=> {
        expect($$(sel.label)[field.image].getText()).toEqual(exp.labelImage);
    });

    it('TC-014 Text in field click or drag and drop = Click or drag and drop', ()=> {
        expect($(sel.dragAndDropField).getText()).toEqual(exp.textInDragAndDrop);
    });

    it('TC-015 Text in submit button = Create!', ()=> {
        expect($(sel.submitButton).getText()).toEqual(exp.textSubmitButton);
    });

    describe("Verify story type names in dropdown menu", ()=>{
        before(() => {
            $(sel.dropdownSelections).click();
            $('.ant-select-dropdown-placement-bottomLeft').waitForDisplayed();
        })

        it('##### Verify story type dropdown menu contains = Overcoming the Monster', ()=> {
            expect($$(sel.dropdownStory)[story.overcomingTheMonster].getText()).toEqual(exp.story1);
        });

        it('##### Verify story type dropdown menu contains = Rebirth', ()=> {
            expect($$(sel.dropdownStory)[story.rebirth].getText()).toEqual(exp.story2);
        });

        it('##### Verify story type dropdown menu contains = Quest', ()=> {
            expect($$(sel.dropdownStory)[story.quest].getText()).toEqual(exp.story3);
        });

        it('##### Verify story type dropdown menu contains = Journey and Return', ()=> {
            expect($$(sel.dropdownStory)[story.journeyAndReturn].getText()).toEqual(exp.story4);
        });

        it('##### Verify story type dropdown menu contains = Rags and Riches', ()=> {
            expect($$(sel.dropdownStory)[story.ragsAndRiches].getText()).toEqual(exp.story5);
        });

        it('##### Verify story type dropdown menu contains = Tragedy', ()=> {
            expect($$(sel.dropdownStory)[story.tragedy].getText()).toEqual(exp.story6);
        });

        it('##### Verify story type dropdown menu contains = Comedy', ()=> {
            expect($$(sel.dropdownStory)[story.comedy].getText()).toEqual(exp.story7);
        });

    });

});