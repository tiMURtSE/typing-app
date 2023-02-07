import React from 'react';

import { StyledButton } from './styles/Button.styled';

const Button = ({ switchModalWindowState }) => {
    return (
        <StyledButton onClick={() => switchModalWindowState()}>
            GO!
        </StyledButton>
    );
};

export default Button;