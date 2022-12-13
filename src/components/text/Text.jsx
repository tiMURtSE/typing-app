import React from 'react';
import Letter from '../letter/Letter';

const Text = ({text, state}) => {
    
    return (
        <div>
            {text.map((letter, index) => {
                if (index < state) {
                    return <Letter className='passed' key={index}>{letter}</Letter>;
                } else if (index === state) {
                    return <Letter className='current' key={index}>{letter}</Letter>;
                } else {
                    return <Letter key={index}>{letter}</Letter>;
                }
            })}
        </div>
    );
};

export default Text;