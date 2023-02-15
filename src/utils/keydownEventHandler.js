const keydownEventHandler = (args) => {
    let { event, timeStartedAt, wrongPressCount, isFirstTimeWrongPress } = args;
    const key = event.key;
    const currentCharacterElement = document.querySelector('.curr');
    const keyCode = event.code;

    if (isSpecialKey(keyCode)) return { isTestingOver: false, timeStartedAt, wrongPressCount, isFirstTimeWrongPress };

    if (!timeStartedAt) timeStartedAt = Date.now();
    console.log(1231)
    if (key === currentCharacterElement.textContent) {
        currentCharacterElement.classList.remove('curr');
        currentCharacterElement.classList.remove('wrong');
        currentCharacterElement.classList.add('completed');
        isFirstTimeWrongPress = true;

        if (!currentCharacterElement.nextElementSibling) {
            return { isTestingOver: true, timeStartedAt, wrongPressCount, isFirstTimeWrongPress };
        }

        currentCharacterElement.nextElementSibling.classList.add('curr');
    } else {
        if (isFirstTimeWrongPress) {
            currentCharacterElement.classList.add('wrong');
            wrongPressCount++;
            isFirstTimeWrongPress = false;
        }
    }

    return { isTestingOver: false, timeStartedAt, wrongPressCount, isFirstTimeWrongPress };
};

const isSpecialKey = (keyCode) => {
    const otherKeysCode = [
        "Backquote", "Minus", "Plus", 
        "Equal", "BracketLeft", "BracketRight", "Backslash", 
        "Semicolon", "Quote", "Slash", "Period", 
        "Comma", "Space"
    ];

    return (
        !keyCode.includes('Digit') && 
        !keyCode.includes('Key') && 
        !otherKeysCode.includes(keyCode)
    );
};

export default keydownEventHandler;