import React, { useContext, useEffect, useState } from 'react';

import StyledText from './styles/Text.styled';
import setResultInStorage from '../utils/setResultInStorage';
import KeydownEventHandler from '../utils/KeydownEventHandler';
import getText from '../api/getText';
import replaceUncommonKeys from '../utils/replaceUncommonKeys';
import UserTextsContext from '../utils/createContext';

const Text = ({ isModalActive, activateModal, setResult }) => {
    const [textForTesting, setTextForTesting] = useState([]);
    const { userText, setUserText } = useContext(UserTextsContext);
    // let timeStartedAt = null;
    // let wrongPressCount = 0;
    // let isFirstTimeWrongPress = true;

    const completeTesting = (result) => {
        const textElement = document.querySelector('.text');

        textElement.blur();
        activateModal();
        calculateResults(result);
    };

    const calculateResults = (result) => {
        const timeInMinutes = ((Date.now() - result.timeStartedAt) / 1000 / 60).toFixed(2);
        const testingCompletionDate = new Date().toLocaleString();
        const characterCount = textForTesting.length;
        const rateOfCorrectPress = Number(100 - (result.mistakeCounter / characterCount * 100)).toFixed(2);
        const charactersPerMinute = Math.round(characterCount / timeInMinutes);
        const newResult = {
            date: testingCompletionDate,
            accuracy: rateOfCorrectPress,
            speed: charactersPerMinute,
        };

        console.log(newResult)

        // if (userText.id) {
        //     setUserText({});
        //     setResult(newResult);
        // } else {
        //     setResult(newResult);
        //     setResultInStorage(newResult);
        // }
    };

    const sendEventToHandler = (event) => {
        if (isModalActive) return;

        // const testingParams = keydownEventHandler({
        //     event,
        //     timeStartedAt,
        //     wrongPressCount,
        //     isFirstTimeWrongPress
        // });
        const result = KeydownEventHandler.retur(event);

        // const isTestingOver = testingParams.isTestingOver;
        // timeStartedAt = testingParams.timeStartedAt;
        // wrongPressCount = testingParams.wrongPressCount;
        // isFirstTimeWrongPress = testingParams.isFirstTimeWrongPress;

        if (result) completeTesting(result);
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

            setTextForTesting(text);
        } catch (error) {
            console.log(error.message)
        }
    };

    useEffect(() => {
        const { text: currentText } = JSON.parse(localStorage.getItem('current-text')) || [];

        if (userText.id || currentText) {
            setTextForTesting(replaceUncommonKeys(userText.text || currentText));
        } else {
            handleText();
        }
    }, []);

    return (
        <StyledText className='text' tabIndex={1} onKeyDown={sendEventToHandler}>
            {textForTesting.map(createText)}
        </StyledText>
    );
};

export default Text;