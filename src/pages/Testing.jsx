import React, { useState } from 'react';

import TextBox from '../components/TextBox';
import ModalWindow from '../components/ModalWindow';

const Testing = () => {
    const [isModalWindowActive, setIsModalWindowActive] = useState(true);

    const switchModalWindowState = () => {
        setIsModalWindowActive(!isModalWindowActive);
    };

    return (
        <div>
            <TextBox />
            
            {isModalWindowActive && <ModalWindow switchModalWindowState={switchModalWindowState}/>}
        </div>
    );
};

export default Testing;