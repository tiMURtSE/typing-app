import React, { useState } from 'react';

import TextBox from '../components/TextBox';
import ModalWindow from '../components/ModalWindow';
import ResultContext from '../utils/createContext';

const Testing = () => {
    const [isModalWindowActive, setIsModalWindowActive] = useState(true);
    const [result, setResult] = useState({date: null, accuracy: null, speed: null});
    const [timer, setTimer] = useState({startTime: null});

    const switchModalWindowState = () => {
        setIsModalWindowActive(prev => !prev);
    };

    return (
        <ResultContext.Provider value={{
            result,
            setResult,
            timer,
            setTimer,
        }}>
            <div className='testing'>
                <TextBox switchModalWindowState={switchModalWindowState}/>
                
                {(isModalWindowActive) && 
                    <ModalWindow switchModalWindowState={switchModalWindowState}/>
                }
            </div>
        </ResultContext.Provider>
    );
};

export default Testing;