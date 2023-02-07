import React from 'react';
import refresh from '../assets/refresh-icon.png';

import { StyledButton } from './styles/Button.styled';

const Button = ({ title, onClickFunction }) => {
    return (
        <StyledButton onClick={() => onClickFunction()}>
            {title}
        </StyledButton>
    );
};

export default Button;