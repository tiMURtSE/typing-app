import React from 'react';

import Button from './Button';
import { StyledTextBox } from './styles/TextBox.styled';
import Text from './Text';

const TextBox = ({ switchModalWindowState }) => {

    return (
        <StyledTextBox>
            <Text switchModalWindowState={switchModalWindowState}/>

            <div className='button-area'>
                <Button title='Заново' onClickFunction={() => switchModalWindowState()}/>
            </div>
        </StyledTextBox>
    );
};

export default TextBox;

