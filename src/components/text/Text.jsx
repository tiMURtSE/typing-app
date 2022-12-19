import React from 'react';
import Letter from '../letter/Letter';

const Text = ({text, state, mistakes}) => {
    const splittedText = text.split('');
    const currentClass = 'letter ' + (mistakes.isMistake ? 'incorrect' : 'current');
    
    return (
        <div>
            {splittedText.map((letter, index) => {
                if (index < state) {
                    return <Letter className='letter passed' key={index}>{letter}</Letter>;
                } else if (index === state) {
                    return <Letter className={currentClass} key={index}>{letter}</Letter>;
                } else {
                    return <Letter className='letter' key={index}>{letter}</Letter>;
                }
            })}
        </div>
    );
};

export default Text;