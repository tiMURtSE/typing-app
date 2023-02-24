const deleteText = (textId) => {
    let userTexts = JSON.parse(localStorage.getItem('user-texts')) || [];

    userTexts = userTexts.filter(elem => elem.id !== textId);
    localStorage.setItem('user-texts', JSON.stringify(userTexts));
};

export default deleteText;