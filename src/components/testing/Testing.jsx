import React, { useEffect, useRef, useState } from 'react';
import { texts } from '../../data/texts';
import { isRegularKey } from '../../utilities/isRegularKey';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import Button from '../UI/button/Button';
import Window from '../window/Window';

const Testing = () => {
    const text = texts[1];
    const [state, setState] = useState(0);
    const [visible, setVisible] = useState(true);
    const [modalOption, setModalOption] = useState('prepare');
    const hasEventListener = useRef(false);
    const [timer, setTimer] = useState({startTime: null, endTime: null});
    const [mistakes, setMistakes] = useState({isMistake: false, number: 0});

    const onKeyDown = (event) => {
        const span = document.querySelector(`.letter:nth-of-type(${state + 1})`);
        
        if (!isRegularKey(event.code)) return;

        if (span.textContent === event.key) {
            hasEventListener.current = false;
            document.removeEventListener('keydown', onKeyDown);
            setState(state + 1);
            setMistakes(prev => ({...prev, isMistake: false}));
            if (!timer.startTime) {
                setTimer({...timer, startTime: Date.now()});
            }
        } else {
            setMistakes({isMistake: true, number: mistakes.number + 1});
        }

        if (!span.nextElementSibling && span.textContent === event.key) {
            setVisible(true);
            setModalOption('result');
            document.removeEventListener('keydown', onKeyDown);
            setTimer({...timer, endTime: Date.now()});
        }
    };

    useEffect(() => {
        // проверяет, навешен ли слушатель событий. предотвращает повторное добавление слушателя
        if (hasEventListener.current) return;

        // условие для предотвращения навешивания слушателя после прохождения теста
        if (modalOption === 'prepare') {
            hasEventListener.current = true;
            document.addEventListener('keydown', onKeyDown);
        }

    }, [state]);

    return (
        <div>
            <Modal visible={visible} setVisible={setVisible} modalOption={modalOption} text={text} timer={timer} mistakes={mistakes}/>

            <Window>
                <Text text={text} state={state} mistakes={mistakes}/>
            </Window>

            <Button onClick={() => setState(state + 1)} style={{backgroundColor: '#fff'}}>Пропуск буквы</Button>
        </div>
    );
};

export default Testing;