import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultContext from '../utils/createContext';
import Button from './Button';
import { StyledModalWidnow } from './styles/ModalWindow.styled';
import { MENU_ROUTE } from '../utils/routes';

const ModalWindow = ({ switchModalWindowState }) => {
    const { result, setResult } = useContext(ResultContext);
    const navigate = useNavigate();
    
    const startTesting = () => {
        const text = document.querySelector('.text');

        text.focus();
        switchModalWindowState();
    };

    const leaveTestingPage = () => {
        switchModalWindowState();
        setResult({date: null, accuracy: null, speed: null});
        navigate(MENU_ROUTE);
    };

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                <span className='inner-window__label'>{result.date ? "Результат!" : "Готовы?"}</span>

                {result.date ? (
                    <div className='stats'>
                        <span>Скорость: {result.speed} сим./мин.</span>
                        <span>Точность: {result.accuracy}%</span>
                    </div>
                ) : ""
                }
                
                <Button
                    title="OK"
                    onClickFunction={result.date ? leaveTestingPage : startTesting}
                />
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;