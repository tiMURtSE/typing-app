import React, { useContext, useEffect, useState } from 'react';

import StyledText from './styles/Text.styled';
import setResultInStorage from '../utils/setResultInStorage';
import KeydownEventHandler from '../utils/KeydownEventHandler';
import getText from '../api/getText';
import replaceUncommonKeys from '../utils/replaceUncommonKeys';
import UserTextsContext from '../utils/createContext';
import calculateResult from '../utils/calculateResult';

const Text = ({ isModalActive, activateModal, setResult }) => {
    const [textForTest, setTextForTest] = useState([]);
    const { userText, setUserText } = useContext(UserTextsContext);

    const completeTest = (finalTestData) => {
        const textElement = document.querySelector('.text');
        const result = calculateResult(finalTestData, textForTest.length);
        const isTestingCustomText = (userText.id) ? true : false;

        if (isTestingCustomText) {
            setUserText({});
            setResult(result);
        } else {
            setResult(result);
            setResultInStorage(result);
        }

        textElement.blur();
        activateModal();
    };

    const sendEventToHandler = (event) => {
        if (isModalActive) {
            return;
        } else {
            const finalTestData = KeydownEventHandler.testHandler(event);

            if (finalTestData) completeTest(finalTestData);
        }
    };

    const createText = (character, index) => {
        const timeStamp = new Date().toLocaleTimeString();
        const currentClass = !index ? 'curr' : '';
        const className = ['character', currentClass, timeStamp];

        return (
            <span 
                className={className.join(' ')}
                key={index}
            >
                {character}
            </span>
        )
    };

    const handleText = async () => {
        try {
            const data = await getText();
            const text = replaceUncommonKeys(data.text);

            setTextForTest(text);
        } catch (error) {
            console.log(error.message)
        }
    };

    useEffect(() => {
        const { text: currentText } = JSON.parse(localStorage.getItem('current-text')) || [];

        if (userText.id || currentText) {
            setTextForTest(replaceUncommonKeys(userText.text || currentText));
        } else {
            handleText();
        }
    }, []);

    return (
        <StyledText className='text' tabIndex={1} onKeyDown={sendEventToHandler}>
            {textForTest.map(createText)}
        </StyledText>
    );
};

export default Text;