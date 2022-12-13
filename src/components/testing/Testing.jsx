import React, { useEffect, useState } from 'react';
import { texts } from '../../data/texts';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import Window from '../window/Window';

const Testing = () => {
    const text = texts[0].split("");
    const [isDone, setIsDone] = useState(false);
    const [state, setState] = useState(0);
    const onKeyDown = (event) => {
        const span = document.querySelector(".current");

        if (span.textContent === event.key) {
            setState(prevState => prevState + 1);
        }

        if (!span.nextElementSibling) {
            setIsDone(true);
            document.removeEventListener('keydown', onKeyDown);    
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
    }, []);

    return (
        <div>
            <Modal isDone={isDone} onKeyDown={onKeyDown}/>

            <Window>
                <Text text={text} state={state}/>
            </Window>

            <button onClick={() => setState(state + 1)}>efwe</button>
        </div>
    );
};

export default Testing;