import { TestParemeters } from "./TestParameters";

class KeydownEventHandler {
    static timeStartedAt = null;
    static mistakeCounter = 0;
    static previousCharacter = null;

    static retur(event) {
        const key = event.key;
        const keyCode = event.code;
        const currentCharacter = document.querySelector('.curr');
        const nextCharacter = currentCharacter.nextElementSibling;
        
        if (isSpecialKey(keyCode)) return;
        if (!this.timeStartedAt) this.timeStartedAt = Date.now();
        
        if (currentCharacter.textContent === key) {
            
            currentCharacter.classList.remove('curr');
            currentCharacter.classList.remove('wrong');
            currentCharacter.classList.add('completed');

            if (!nextCharacter) {
                const r = {...this};
                this.timeStartedAt = null;
                this.mistakeCounter = 0;
                this.previousCharacter = null;
                return r;
            } else {
                nextCharacter.classList.add('curr');
            }
        } else {
            if (currentCharacter !== this.previousCharacter) {
                currentCharacter.classList.add('wrong');
                this.mistakeCounter++;
                this.previousCharacter = currentCharacter;
            }
        }

        console.log(this.mistakeCounter)
    };

    static reset() {
        this.timeStartedAt = null;
        this.mistakeCounter = 0;
        this.previousCharacter = null;
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