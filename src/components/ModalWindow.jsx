import React, { useContext } from 'react';
import ResultContext from '../utils/createContext';
import Button from './Button';

import { StyledModalWidnow } from './styles/ModalWindow.styled';

const ModalWindow = ({ switchModalWindowState }) => {
    const { result, setResult } = useContext(ResultContext);
    console.log(result)

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                <span className='inner-window__label'>{result ? "RESULT!" : "GO!"}</span>
                
                <Button
                    title="GO"
                    onClickFunction={result ? () => {setResult(0); switchModalWindowState()} : switchModalWindowState}
                />
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;