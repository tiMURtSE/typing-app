import React, { useEffect, useRef, useState } from 'react';
import { texts } from '../../data/texts';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import Button from '../UI/button/Button';
import Window from '../window/Window';

const Testing = () => {
    const text = texts[1].split("");
    const [modal, setModal] = useState({isStart: true, isDisplayed: true});
    const [state, setState] = useState(0);
    const ref = useRef(false);
    const timer = useRef({startTime: null, endTime: null});

    useEffect(() => {
        // проверяет, навешен ли слушатель событий. предотвращает повторное добавление слушателя
        if (ref.current) return;

        const onKeyDown = (event) => {
            const span = document.querySelector(".current");

            if (span.textContent === event.key) {
                ref.current = false;
                document.removeEventListener('keydown', onKeyDown);
                setState(state + 1);
                if (!timer.current.startTime) {
                    timer.current.startTime = Date.now();
                }
            }
    
            if (!span.nextElementSibling) {
                setModal({isStart: false, isDisplayed: true});
                document.removeEventListener('keydown', onKeyDown);
                timer.current.endTime = Date.now();
            }
        };
        
        // условие для предотвращения навешивания слушателя после прохождения теста
        if (modal.isStart) {
            ref.current = true;
            document.addEventListener('keydown', onKeyDown);
        }
    }, [state]);

    return (
        <div>
            <Modal modal={modal} setModal={setModal} timer={timer} text={text}/>

            <Window>
                <Text text={text} state={state}/>
            </Window>

            <Button onClick={() => setState(state + 1)} style={{backgroundColor: '#fff'}}>Пропуск буквы</Button>
        </div>
    );
};

export default Testing;