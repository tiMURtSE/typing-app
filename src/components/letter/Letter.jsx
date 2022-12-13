import React from 'react';

const Letter = ({className, children}) => {
    return (
        <span className={className}>{children}</span>
    );
};

export default Letter;