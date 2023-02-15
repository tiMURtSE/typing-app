import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import StyledModalWidnow from './styles/ModalWindow.styled';
import ResultContext from '../utils/createContext';
import { MENU_ROUTE } from '../utils/routes';
import TestingStats from './TestingStats';

const ModalWindow = ({ isVisible, closeModal }) => {
    const { result, setResult } = useContext(ResultContext);
    const navigate = useNavigate();
    
    const startTesting = () => {
        const text = document.querySelector('.text');

        text.focus();
        closeModal();
    };

    const leaveTestingPage = () => {
        setResult({date: null, accuracy: null, speed: null});
        closeModal();
        navigate(MENU_ROUTE);
    };

    if (!isVisible) return null;

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                <span className='inner-window__label'>{result.date ? "Результат!" : "Готовы?"}</span>

                {result.date ? <TestingStats result={result}/> : null}
                
                <Button 
                    action={result.date ? leaveTestingPage : startTesting}
                >
                    OK
                </Button>
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;