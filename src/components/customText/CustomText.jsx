import React from 'react';
import classes from './CustomText.module.css';

const CustomText = ({text, setVisible}) => {
    return (
        <div className={classes.custom__wrapper}>
            <div className={classes.custom__text}>
                {text}
            </div>
            <div className={classes.custom__btns}>
                <div onClick={() => setVisible(true)} className={classes.btn}>&#9998;</div>
                <div className={classes.btn}>&#128939;</div>
            </div>
        </div>
    );
};

export default CustomText;