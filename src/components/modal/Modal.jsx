import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';
import classes from './Modal.module.css';

const Modal = ({modal, setModal, timer}) => {
    const route = useNavigate();
    const clickFunction = () => {
        if (modal.isStart) {
            setModal({...modal, isDisplayed: false});
        } else {
            route("/");
        }
    };

    if (!modal.isDisplayed) return;

    return (
        <div className={classes.modal}>
            <div className={classes.alert}>
                <span>
                    {(modal.isStart) ? (
                        "Готовы?"
                    ) : (
                        "Конец"
                    )}
                </span>
                <Button onClick={clickFunction}>OK!</Button>
            </div>
        </div>
    );
};

export default Modal;