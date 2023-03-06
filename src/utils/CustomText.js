class CustomText {
    static addNewText(text) {
        let customTexts = getCustomText();

        customTexts.push(text);
        localStorage.setItem('user-texts', JSON.stringify(customTexts));
    }

    static editText(text, textId) {
        let customTexts = getCustomText();

        customTexts = customTexts.map(customText => {
            return (customText.id === textId) ? text : customText;
        });
        localStorage.setItem('user-texts', JSON.stringify(customTexts));
    }

    static deleteText(textId) {
        let customTexts = getCustomText();

        customTexts = customTexts.filter(elem => elem.id !== textId);
        localStorage.setItem('user-texts', JSON.stringify(customTexts));
    }
}

const getCustomText = () => {
    const text = JSON.parse(localStorage.getItem('user-texts')) || [];

    return text;
};

export default CustomText;