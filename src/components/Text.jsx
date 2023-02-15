import React, { useContext, useMemo, useState } from 'react';
import ResultContext from '../utils/createContext';

import { StyledText } from './styles/Text.styled';
import { text } from '../api/fetchRandomText';
import { setResultInLocalStorage } from '../utils/setData';
import keydownEventHandler from '../utils/keydownEventHandler';

const Text = ({ activateWindow }) => {
    const textForTesting = text;
    const { setResult } = useContext(ResultContext);
    let timeStartedAt = null;
    let wrongPressCount = 0;
    let isFirstTimeWrongPress = true;

    const completeTesting = () => {
        const textElement = document.querySelector('.text');

        textElement.blur();
        activateWindow();
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

    const handler = (event) => {
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

    return (
        <StyledText className='text' tabIndex={1} onKeyDown={handler}>
                <div>
                    {textForTesting.map((character, index) => {
                        const timeStampForRendering = new Date().toLocaleTimeString();

                        return (
                            <span 
                                className={`character ${!index ? 'curr' : ''} ${timeStampForRendering} `}
                                key={index}
                            >
                                {character}
                            </span>
                        )
                    })}
                </div>
        </StyledText>
    );
};

export default Text;