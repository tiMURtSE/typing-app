import React from 'react';
import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    console.log('button')
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default Button;