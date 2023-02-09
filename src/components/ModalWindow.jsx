import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultContext from '../utils/createContext';
import Button from './Button';
import { StyledModalWidnow } from './styles/ModalWindow.styled';

const ModalWindow = ({ switchModalWindowState }) => {
    const navigate = useNavigate();
    const { result, setResult } = useContext(ResultContext);

    const startTesting = () => {
        switchModalWindowState();
        const text = document.querySelector('.text');
        text.focus();
    };

    const leaveTestingPage = () => {
        setResult({date: null, accuracy: null, speed: null});
        switchModalWindowState();
        navigate('/');
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
                ) : (
                    ""
                )}
                
                <Button
                    title="OK"
                    onClickFunction={result.date ? leaveTestingPage : startTesting}
                />
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;