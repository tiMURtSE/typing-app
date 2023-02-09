import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultContext from '../utils/createContext';
import Button from './Button';

import { StyledModalWidnow } from './styles/ModalWindow.styled';

const ModalWindow = ({ switchModalWindowState }) => {
    const navigate = useNavigate();
    const { result, setResult, timer, setTimer } = useContext(ResultContext);
    const [number, setNumber] = useState(0);

    const startTesting = () => {
        switchModalWindowState();
        document.addEventListener('keydown', handler);
    };

    const completeTesting = () => {
        const timeInMinutes = ((Date.now() - timer.startTime) / 1000).toFixed(2);
        
        document.removeEventListener('keydown', handler);
        setResult(timeInMinutes);
        switchModalWindowState();
    };

    const leaveTestingPage = () => {
        setResult(0);
        switchModalWindowState();
        navigate('/');
    };
    console.log('render')


    useEffect(() => {
        const handler = (event) => {
            const keyCode = event.code;
            const pressedKey = event.key;
            const currentCharacterElement = document.querySelector('.curr');
    
            if (isSpecialKey(keyCode)) return;
    
            // if (!timer.startTime) setTimer({...timer, startTime: Date.now()});
            console.log(number)
            setNumber(prev => prev + 1);
            
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
    }, []);

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                <span className='inner-window__label'>{result ? "RESULT!" : "GO!"}</span>

                {result ? (
                    <span>{result}</span>
                ) : (
                    ""
                )}
                
                <Button
                    title="OK"
                    onClickFunction={result ? leaveTestingPage : startTesting}
                />
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;