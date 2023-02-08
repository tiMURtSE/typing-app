import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultContext from '../utils/createContext';
import Button from './Button';
import ModalWindow from './ModalWindow';

import { StyledTextBox } from './styles/TextBox.styled';

const TextBox = ({ switchModalWindowState }) => {
    // cosnt [timer, setTimer] = useState(0);
    // const [symbols, setSymbols] = useState(0);
    const { setResult } = useContext(ResultContext);

    return (
        <StyledTextBox>
            <div className='text-area'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, molestiae! Quae iste aperiam necessitatibus, nihil fugiat quo dolore repellendus sit voluptatem sunt repellat neque est. Atque ipsam tempora quisquam quasi ab. Repellat accusamus nam deserunt magni assumenda nulla numquam cumque? Totam, accusamus eveniet ut corporis dolorem eos in animi sit veritatis, reiciendis repellendus repudiandae recusandae porro dolor pariatur saepe eligendi, eum necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>

            <div className='button-area'>
                <Button title='Заново' onClickFunction={() => switchModalWindowState()}/>
                <Button title='Завершить' onClickFunction={() => setResult(Date.now())}/>
            </div>

        </StyledTextBox>
    );
};

export default TextBox;