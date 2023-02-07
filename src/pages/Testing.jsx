import React, { useState } from 'react';
import ModalWindow from '../components/ModalWindow';

const Testing = () => {
    const [isModalWindowActive, setIsModalWindowActive] = useState(true);

    const switchModalWindowState = () => {
        setIsModalWindowActive(!isModalWindowActive);
    };

    return (
        <div>
            {isModalWindowActive && <ModalWindow switchModalWindowState={switchModalWindowState}/>}
        </div>
    );
};

export default Testing;