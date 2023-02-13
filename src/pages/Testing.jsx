import React, { useState } from 'react';

import TextBox from '../components/TextBox';
import ModalWindow from '../components/ModalWindow';
import ResultContext from '../utils/createContext';

const Testing = () => {
    const [isModalWindowActive, setIsModalWindowActive] = useState(true);
    const [result, setResult] = useState({date: null, accuracy: null, speed: null});
    const [timer, setTimer] = useState({startTime: null});

    return (
        <ResultContext.Provider value={{
            isModalWindowActive,
            setIsModalWindowActive,
            result,
            setResult,
            timer,
            setTimer,
        }}>
            <div className='testing'>
                <TextBox/>
                
                {isModalWindowActive && <ModalWindow />}
            </div>
        </ResultContext.Provider>
    );
};

export default Testing;