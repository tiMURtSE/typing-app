import React from 'react';
import classes from './Window.module.css';

const Window = ({children}) => {
    return (
        <div className={classes.window}>
            {children}
        </div>
    );
};

export default Window;