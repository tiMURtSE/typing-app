const setUserTextInStorage = (newText, replacementId) => {
    let userTexts = JSON.parse(localStorage.getItem('user-texts')) || [];

    if (replacementId) {
        userTexts = userTexts.map(text => {
            if (text.id === replacementId) {
                return newText;
            } else {
                return text;
            }
        });
    } else {
        userTexts.push(newText);
    }

    localStorage.setItem('user-texts', JSON.stringify(userTexts));
};

export default setUserTextInStorage;