import React, { useContext, useMemo } from 'react';
import ResultContext from '../utils/createContext';

import { StyledText } from './styles/Text.styled';
import { text } from '../api/fetchRandomText';
import { setResultInLocalStorage } from '../utils/setData';

const Text = ({ switchModalWindowState }) => {
    const textForTesting = text;
    const { setResult } = useContext(ResultContext);
    let testingTimeStartedAt = null;
    let wrongPressCount = 0;
    let isFirstTimeWrongPress = true;

    const completeTesting = () => {
        const textElement = document.querySelector('.text');

        textElement.blur();
        switchModalWindowState();
        calculateResults();
    };

    const calculateResults = () => {
        const timeInMinutes = ((Date.now() - testingTimeStartedAt) / 1000 / 60).toFixed(2);
        const testingCompletionDate = new Date().toLocaleString();
        const characterCount = textForTesting.length;
        const rateOfCorrectPress = Number(100 - (wrongPressCount / characterCount * 100)).toFixed(2);
        const charactersPerMinute = Math.round(characterCount / timeInMinutes);
        const newResult = {
            date: testingCompletionDate,
            accuracy: rateOfCorrectPress,
            speed: charactersPerMinute,
        };

        setResult(newResult);
        setResultInLocalStorage(newResult);
    };

    const keydownEventHandler = (event) => {
        const pressedKey = event.key;
        const currentCharacterElement = document.querySelector('.curr');
        const keyCode = event.code;

        if (isSpecialKey(keyCode)) return;

        if (!testingTimeStartedAt) testingTimeStartedAt = Date.now();
        
        if (pressedKey === currentCharacterElement.textContent) {
            currentCharacterElement.classList.remove('curr');
            currentCharacterElement.classList.remove('wrong');
            currentCharacterElement.classList.add('completed');
            isFirstTimeWrongPress = true;
    
            if (!currentCharacterElement.nextElementSibling) {
                completeTesting();
                return;
            }
    
            currentCharacterElement.nextElementSibling.classList.add('curr');
        } else {
            if (isFirstTimeWrongPress) {
                currentCharacterElement.classList.add('wrong');
                wrongPressCount++;
                isFirstTimeWrongPress = false;
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
    
    return (
        <StyledText className='text' tabIndex={1} onKeyDown={keydownEventHandler}>
                {textForTesting.map((character, index) => {
                    const timeStampForRendering = new Date().toLocaleTimeString();

                    return (
                        <span 
                            className={`character ${!index ? 'curr' : ''} ${timeStampForRendering} `}
                            key={index}
                        >
                            {character}
                        </span>
                    )
                })}
        </StyledText>
    );
};

export default Text;