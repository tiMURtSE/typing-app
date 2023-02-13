import React, { useContext } from 'react';

import Text from './Text';
import Button from './Button';
import { StyledTextBox } from './styles/TextBox.styled';
import ResultContext from '../utils/createContext';

const TextBox = () => {
    const { isModalWindowActive, setIsModalWindowActive } = useContext(ResultContext);
    const restart = () => {
        setIsModalWindowActive(!isModalWindowActive);
    };

    return (
        <>
            <StyledTextBox>
                <Text/>

                <div className='button-area'>
                    <Button title='Заново' onClickFunction={() => restart()}/>
                </div>
            </StyledTextBox>
        </>
    );
};

export default TextBox;

