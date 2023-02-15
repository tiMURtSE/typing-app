import React, { useState } from 'react';

import TextBox from '../components/TextBox';
import ModalWindow from '../components/ModalWindow';
import ResultContext from '../utils/createContext';
import Text from '../components/Text';
import Button from '../components/Button';
import { StyledTextBox } from '../components/styles/TextBox.styled';

const Testing = () => {
    const [isModalActive, setIsModalActive] = useState(true);
    const [result, setResult] = useState({date: null, accuracy: null, speed: null});
    const [timer, setTimer] = useState({startTime: null});

    return (
        <ResultContext.Provider value={{
            result,
            setResult,
            timer,
            setTimer,
        }}>
            <StyledTextBox className='testing'>
                <Text activateWindow={() => setIsModalActive(true)}/>

                <div className='button-area'>
                    <Button title='Заново' onClickFunction={() => setIsModalActive(true)}/>
                </div>

                <ModalWindow isModalActive={isModalActive} onClose={() => setIsModalActive(false)}/>
            </StyledTextBox>
        </ResultContext.Provider>
    );
};

export default Testing;