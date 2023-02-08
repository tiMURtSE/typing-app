import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { randomText } from '../api/fetchRandomText';
import ResultContext from '../utils/createContext';
// import { handler2 } from '../utils/keydownHandler';
import Button from './Button';

import { StyledTextBox } from './styles/TextBox.styled';

const TextBox = ({ switchModalWindowState }) => {
    const [timer, setTimer] = useState(0);
    const { setResult } = useContext(ResultContext);
    const text = randomText.split('');
    const [listener, setListener] = useState(false);

    // const handler = () => {
    //     console.log(123)
    // }

    const start = () => {
        setTimer(Date.now());
    };

    const completeTesting = () => {
        const time = ((Date.now() - timer) / 1000 / 60).toFixed(2);

        setResult(time);
        switchModalWindowState();
        document.removeEventListener('keydown', handler);
        console.log('убран')
    };
    console.log('render')
    const handler = (event) => {
        const keyCode = event.code;
        const pressedKey = event.key;
        const currentCharacterElement = document.querySelector('.curr');
    
        if (isSpecialKey(keyCode)) return;
        
        if (pressedKey === currentCharacterElement.textContent) {
            currentCharacterElement.classList.remove('curr');
            currentCharacterElement.classList.remove('wrong');
            currentCharacterElement.classList.add('completed');
    
            if (!currentCharacterElement.nextElementSibling) {
                completeTesting();
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

    useEffect(() => {
        if (!listener && timer) {
            document.addEventListener('keydown', handler);
        }

    }, [timer]);

    return (
        <StyledTextBox>
            <div className='text-area'>
                {text.map((character, index) => {
                   if (index === 0) return <span className='character curr' key={index}>{character}</span>;

                    return <span className='character' key={index}>{character}</span>;
                })}
            </div>

            <div className='button-area'>
                <Button title='Старт' onClickFunction={() => start()}/>
                <Button title='Заново' onClickFunction={() => switchModalWindowState()}/>
                <Button title='Завершить' onClickFunction={() => completeTesting()}/>
            </div>

        </StyledTextBox>
    );
};

export default TextBox;

