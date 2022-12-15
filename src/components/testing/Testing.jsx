import React, { useEffect, useRef, useState } from 'react';
import { texts } from '../../data/texts';
import { isRegularKey } from '../../utilities/isRegularKey';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import Button from '../UI/button/Button';
import Window from '../window/Window';

const Testing = () => {
    const text = texts[1].split("");
    const [modal, setModal] = useState({isStart: true, isDisplayed: true});
    const [state, setState] = useState(0);
    const hasEventListener = useRef(false);
    const timer = useRef({startTime: null, endTime: null});
    const setTimer = (option) => {
        const {startTime} = timer.current;

        if (option === 'start') {
            if (startTime) return;
            timer.current.startTime = Date.now();
        } else if (option === 'end') {
            timer.current.endTime = Date.now();
        }
    };
    // const [isIncorrect, setIsIncorrect] = useState(false);
    // console.log(isIncorrect)

    useEffect(() => {
        // проверяет, навешен ли слушатель событий. предотвращает повторное добавление слушателя
        if (hasEventListener.current) return;

        const onKeyDown = (event) => {
            const span = document.querySelector('.current');

            if (!isRegularKey(event.code)) return;

            if (span.textContent === event.key) {
                hasEventListener.current = false;
                document.removeEventListener('keydown', onKeyDown);
                setState(state + 1);
                setTimer('start');
            } else {
                // setIsIncorrect(true);
            }
    
            if (!span.nextElementSibling) {
                setModal({isStart: false, isDisplayed: true});
                document.removeEventListener('keydown', onKeyDown);
                setTimer('end');
            }
        };
        
        // условие для предотвращения навешивания слушателя после прохождения теста
        if (modal.isStart) {
            console.log('1')
            hasEventListener.current = true;
            document.addEventListener('keydown', onKeyDown);
        }

    }, [state]);


    return (
        <div>
            <Modal modal={modal} setModal={setModal} timer={timer} text={text}/>

            <Window>
                { <Text text={text} state={state}/> }
            </Window>

            <Button onClick={() => setState(state + 1)} style={{backgroundColor: '#fff'}}>Пропуск буквы</Button>
        </div>
    );
};

export default Testing;