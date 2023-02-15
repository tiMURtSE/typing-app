import React, { useContext } from 'react';
import ResultContext from '../utils/createContext';

import StyledText from './styles/Text.styled';
import { text } from '../api/fetchRandomText';
import { setResultInLocalStorage } from '../utils/setData';
import keydownEventHandler from '../utils/keydownEventHandler';

const Text = ({ isModalActive, activateModal }) => {
    const textForTesting = text;
    const { setResult } = useContext(ResultContext);
    let timeStartedAt = null;
    let wrongPressCount = 0;
    let isFirstTimeWrongPress = true;
    console.log('render')

    const completeTesting = () => {
        const textElement = document.querySelector('.text');

        textElement.blur();
        activateModal();
        calculateResults();
    };

    const calculateResults = () => {
        const timeInMinutes = ((Date.now() - timeStartedAt) / 1000 / 60).toFixed(2);
        const testingCompletionDate = new Date().toLocaleString();
        const characterCount = textForTesting.length;
        const rateOfCorrectPress = Number(100 - (wrongPressCount / characterCount * 100)).toFixed(2);
        const charactersPerMinute = Math.round(characterCount / timeInMinutes);
        const newResult = {
            date: testingCompletionDate,
            accuracy: rateOfCorrectPress,
            speed: charactersPerMinute,
        };

        setResult(newResult);
        setResultInLocalStorage(newResult);
    };

    const sendEventToHandler = (event) => {
        if (isModalActive) return;

        const testingParams = keydownEventHandler({
            event, 
            timeStartedAt,
            wrongPressCount,
            isFirstTimeWrongPress
        });

        const isTestingOver = testingParams.isTestingOver;
        timeStartedAt = testingParams.timeStartedAt;
        wrongPressCount = testingParams.wrongPressCount;
        isFirstTimeWrongPress = testingParams.isFirstTimeWrongPress;

        if (isTestingOver) completeTesting();
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

    return (
        <StyledText className='text' tabIndex={1} onKeyDown={sendEventToHandler}>
            {textForTesting.map(createText)}
        </StyledText>
    );
};

export default Text;