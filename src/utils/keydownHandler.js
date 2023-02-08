export const handler2 = (event) => {
    const keyCode = event.code;
    const pressedKey = event.key;
    const currentCharacterElement = document.querySelector('.curr');

    if (isSpecialKey(keyCode)) return;
    
    if (pressedKey === currentCharacterElement.textContent) {
        currentCharacterElement.classList.remove('curr');
        currentCharacterElement.classList.remove('wrong');
        currentCharacterElement.classList.add('completed');

        if (!currentCharacterElement.nextElementSibling) {
            // completeTesting();
            return;
        }

        currentCharacterElement.nextElementSibling.classList.add('curr');
    } else {
        currentCharacterElement.classList.add('wrong');
    }
}

const isSpecialKey = (key) => {
    const otherKeys = [
        "Backquote", "Minus", "Plus", 
        "Equal", "BracketLeft", "BracketRight", "Backslash", 
        "Semicolon", "Quote", "Slash", "Period", 
        "Comma", "Space"
    ];

    return (
        !key.includes('Digit') && 
        !key.includes('Key') && 
        !otherKeys.includes(key)
    );
};

// export const handler = (event) => {
//     console.log(event.code)
// }