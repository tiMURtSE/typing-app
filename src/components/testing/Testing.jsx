import React, { useEffect, useState } from 'react';
import { texts } from '../../data/texts';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import Button from '../UI/button/Button';
import Window from '../window/Window';

const Testing = () => {
    const text = texts[0].split("");
    const [modal, setModal] = useState({isStart: true, isDisplayed: true});
    const [state, setState] = useState(0);
    const timer = {isStarted: false, startTime: null, endTime: null};

    useEffect(() => {
        const onKeyDown = (event) => {
            const span = document.querySelector(".current");
    
            if (span.textContent === event.key) {
                console.log(state)
                setState(state + 1);
            }
    
            if (!span.nextElementSibling) {
                setModal({isStart: false, isDisplayed: true});
                document.removeEventListener('keydown', onKeyDown);
            }
        };
        document.removeEventListener('keydown', onKeyDown);

        document.addEventListener('keydown', onKeyDown);
    }, [state]);

    return (
        <div>
            <Modal modal={modal} setModal={setModal} timer={timer}/>

            <Window>
                <Text text={text} state={state}/>
            </Window>

            <Button onClick={() => setState(state + 1)} style={{backgroundColor: '#fff'}}>Пропуск буквы</Button>
        </div>
    );
};

export default Testing;