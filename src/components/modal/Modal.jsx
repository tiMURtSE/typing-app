import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

const Modal = ({isDone, onKeyDown}) => {
    const [isActive, setIsActive] = useState(true);
    const route = useNavigate();

    if (isActive || isDone) {
        document.removeEventListener('keydown', onKeyDown);
    }

    return (
        <div className={(isActive || isDone) ? [classes.modal, classes.active].join(" ") : classes.modal}>

            {(isDone) ? (
                    <div>
                        <span>Done!</span>
                        <button onClick={() => route('/')}>Меню</button>
                    </div>
            ) : (
                <div className={classes.alert}>
                    <span>Готов?</span>
                    <button onClick={() => setIsActive(false)} className={classes.button}>Да!</button>
                </div>
            )}
        </div>
    );
};

export default Modal;