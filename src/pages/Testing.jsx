import React, { useState } from 'react';

import ModalWindow from '../components/ModalWindow';
import Text from '../components/Text';
import Button from '../components/Button';
import StyledTextBox from '../components/styles/TextBox.styled';
import ResultContext from '../utils/createContext';

const Testing = () => {
    const [isModalActive, setIsModalActive] = useState(true);
    const [result, setResult] = useState({date: null, accuracy: null, speed: null});

    return (
        <ResultContext.Provider value={{ result, setResult }}>
            <StyledTextBox className='testing'>
                <Text isModalActive={isModalActive} activateModal={() => setIsModalActive(true)}/>

                <div className='button-area'>
                    <Button action={() => setIsModalActive(true)}>Заново</Button>
                </div>

                <ModalWindow isVisible={isModalActive} closeModal={() => setIsModalActive(false)}/>
            </StyledTextBox>
        </ResultContext.Provider>
    );
};

export default Testing;