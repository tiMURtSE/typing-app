class KeydownEventHandler {
    static testData = {
        timeStartedAt: null,
        mistakeCounter: 0,
        previousCharacter: null
    }

    static testHandler(event) {
        const { timeStartedAt } = this.testData;
        const key = event.key;
        const keyCode = event.code;
        const currentCharacter = document.querySelector('.curr');
        const nextCharacter = currentCharacter.nextElementSibling;

        if (isSpecialKey(keyCode)) return;
        if (!timeStartedAt) this.testData.timeStartedAt = Date.now();
        
        if (currentCharacter.textContent === key) {
            
            currentCharacter.classList.remove('curr');
            currentCharacter.classList.remove('wrong');
            currentCharacter.classList.add('completed');

            if (!nextCharacter) {
                const finalTestData = {...this.testData};
                
                this.setTestData();
                return finalTestData;
            } else {
                nextCharacter.classList.add('curr');
            }
        } else {
            if (currentCharacter !== this.testData.previousCharacter) {
                currentCharacter.classList.add('wrong');
                this.testData.mistakeCounter++;
                this.testData.previousCharacter = currentCharacter;
            }
        }
    };

    static setTestData() {
        this.testData = {
            timeStartedAt: null,
            mistakeCounter: 0,
            previousCharacter: null
        }
    }
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

export default KeydownEventHandler;