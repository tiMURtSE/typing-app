import React, { useContext, useState } from 'react';

import { randomText } from '../api/fetchRandomText';
import ResultContext from '../utils/createContext';
import Button from './Button';
import { StyledTextBox } from './styles/TextBox.styled';

const TextBox = ({ switchModalWindowState }) => {
    const text = randomText.split('');

    return (
        <StyledTextBox>
            <div className='text-area'>
                {text.map((character, index) => {
                   if (index === 0) return <span className='character curr' key={index}>{character}</span>;

                    return <span className='character' key={index}>{character}</span>;
                })}
            </div>

            <div className='button-area'>
                <Button title='Заново' onClickFunction={() => switchModalWindowState()}/>
            </div>

        </StyledTextBox>
    );
};

export default TextBox;

