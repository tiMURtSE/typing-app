import React, { useContext } from 'react';
import ResultContext from '../utils/createContext';

import { StyledText } from './styles/Text.styled';
import { randomText } from '../api/fetchRandomText';

const Text = ({ switchModalWindowState }) => {
    const text = randomText.split('');
    const { setResult, timer, setTimer } = useContext(ResultContext);
    let percentageOfIncorrectClicks = 0;
    let isFirstTimeIncorrectClick = true;

    const completeTesting = () => {
        const text = document.querySelector('.text');
        text.blur();

        switchModalWindowState();
        calculateResults();
    };

    const calculateResults = () => {
        const timeInMinutes = ((Date.now() - timer.startTime) / 1000 / 60).toFixed(2);
        const testingCompletionDate = new Date().toLocaleString();
        const sumOfCharacters = text.length;
        const percentageOfCorrectClicks = 100 - Number((percentageOfIncorrectClicks / sumOfCharacters * 100).toFixed(2));
        const charactersPerMinute = Math.round(sumOfCharacters / timeInMinutes);
      
        setResult({
            date: testingCompletionDate,
            accuracy: percentageOfCorrectClicks,
            speed: charactersPerMinute,
        });
    };

    const keydownEventHandler = (event) => {
        const keyCode = event.code;
        const pressedKey = event.key;
        const currentCharacterElement = document.querySelector('.curr');
        const startTime = timer.startTime;

        if (isSpecialKey(keyCode)) return;

        if (!startTime) setTimer({...timer, startTime: Date.now()});
        
        if (pressedKey === currentCharacterElement.textContent) {
            currentCharacterElement.classList.remove('curr');
            currentCharacterElement.classList.remove('wrong');
            currentCharacterElement.classList.add('completed');
            isFirstTimeIncorrectClick = true;
    
            if (!currentCharacterElement.nextElementSibling) {
                completeTesting();
                return;
            }
    
            currentCharacterElement.nextElementSibling.classList.add('curr');
        } else {
            if (isFirstTimeIncorrectClick) {
                percentageOfIncorrectClicks++;
                isFirstTimeIncorrectClick = false;
            }
            currentCharacterElement.classList.add('wrong');
        }
    };
    
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
    
    return (
        <StyledText className='text' tabIndex={1} onKeyDown={keydownEventHandler}>
                {text.map((character, index) => {
                   if (index === 0) return <span className='character curr' key={index}>{character}</span>;

                    return <span className='character' key={index}>{character}</span>;
                })}
        </StyledText>
    );
};

export default Text;