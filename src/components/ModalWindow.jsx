import React, { useContext } from 'react';
import ResultContext from '../utils/createContext';
import Button from './Button';

import { StyledModalWidnow } from './styles/ModalWindow.styled';

const ModalWindow = ({ switchModalWindowState }) => {
    const { result } = useContext(ResultContext);

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                <span className='inner-window__label'>Старт?</span>
                
                <Button
                    title='GO!'
                    onClickFunction={switchModalWindowState}
                />
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;