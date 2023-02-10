import React from 'react';

import Text from './Text';
import Button from './Button';
import { StyledTextBox } from './styles/TextBox.styled';

const TextBox = ({ switchModalWindowState }) => {
    const restart = () => {
        switchModalWindowState();
    };

    return (
        <StyledTextBox>
            <Text switchModalWindowState={switchModalWindowState}/>

            <div className='button-area'>
                <Button title='Заново' onClickFunction={() => restart()}/>
            </div>
        </StyledTextBox>
    );
};

export default TextBox;

