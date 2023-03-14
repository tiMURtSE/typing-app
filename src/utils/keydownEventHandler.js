import { TestParemeters } from "./TestParameters";

const keydownEventHandler = (event) => {
    // let { event, timeStartedAt, wrongPressCount, isFirstTimeWrongPress } = args;
    const key = event.key;
    const currentCharacterElement = document.querySelector('.curr');
    const keyCode = event.code;
    // let testParemeters = TestParemeters.time;

    // if (isSpecialKey(keyCode)) return { isTestingOver: false, timeStartedAt, wrongPressCount, isFirstTimeWrongPress };
    if (isSpecialKey(keyCode)) return;

    if (!TestParemeters.time) {
        // timeStartedAt = Date.now()

        TestParemeters.setTime();
    };
    
    console.log(TestParemeters);

    if (key === currentCharacterElement.textContent) {
        currentCharacterElement.classList.remove('curr');
        currentCharacterElement.classList.remove('wrong');
        currentCharacterElement.classList.add('completed');
        TestParemeters.isFirstTimeWrongPress = true;

        if (keyCode === 'Slash' || keyCode === 'Code') event.preventDefault();

        if (!currentCharacterElement.nextElementSibling) {
            TestParemeters.stopTime();
            return {
                isEnd: true,
                result: {
                    time: TestParemeters.time,
                    mistakeCounter: TestParemeters.mistakeCounter
                }
            };
        }

        currentCharacterElement.nextElementSibling.classList.add('curr');
    } else {
        if (TestParemeters.isFirstTimeWrongPress) {
            currentCharacterElement.classList.add('wrong');
            TestParemeters.mistakeCounter++;
            TestParemeters.isFirstTimeWrongPress = false;
        }
    }

    return {
        isEnd: false,
        result: null
    };
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

document.addEventListener('keydown', (event) => {
    if (
        event.code === 'Slash' ||
        event.code === 'Quote'
    ) event.preventDefault();
});

export default keydownEventHandler;