import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalWindow from '../components/ModalWindow';
import Text from '../components/Text';
import Button from '../components/Button';
import StyledTextBox from '../components/styles/TextBox.styled';
import { MENU_ROUTE } from '../constants/routes';
import KeydownEventHandler from '../utils/KeydownEventHandler';

const Testing = () => {
    const [modal, setModal] = useState({isVisible: true, type: 'start'});
    const [result, setResult] = useState({date: null, accuracy: null, speed: null});
    const navigate = useNavigate();

    const startTesting = () => {
        const text = document.querySelector('.text');

        text.focus();
        setModal({...modal, isVisible: false});
        KeydownEventHandler.setTestData();
    };

    const leaveTestingPage = () => {
        setResult({date: null, accuracy: null, speed: null});
        setModal({...modal, isVisible: false});
        navigate(MENU_ROUTE);
    };

    return (
        <StyledTextBox className='testing'>
            <Text 
                modal={modal} 
                activateModal={() => setModal({isVisible: true, type: 'end'})}
                setResult={setResult}
            />

            <div className='button-area'>
                <Button action={() => setModal({isVisible: true, type: 'start'})}>Заново</Button>
            </div>

            <ModalWindow
                modal={modal}
                closeModal={() => setModal({...modal, isVisible: false})}
                startTesting={startTesting}
                leaveTestingPage={leaveTestingPage}
                result={result}
            />
        </StyledTextBox>
    );
};

export default Testing;