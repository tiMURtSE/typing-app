import React, { useContext, useState } from 'react';

import TextBox from '../components/TextBox';
import ModalWindow from '../components/ModalWindow';
import ResultContext from '../utils/createContext';

const Testing = () => {
    const [isModalWindowActive, setIsModalWindowActive] = useState(true);
    const [result, setResult] = useState(0);

    const switchModalWindowState = () => {
        setIsModalWindowActive(!isModalWindowActive);
    };

    return (
        <ResultContext.Provider value={{
            result,
            setResult,
        }}>
            <div className='testing'>
                <TextBox 
                    switchModalWindowState={switchModalWindowState}
                />
                
                {(isModalWindowActive) && 
                    <ModalWindow
                        switchModalWindowState={switchModalWindowState}
                    />
                }
            </div>
        </ResultContext.Provider>
    );
};

export default Testing;