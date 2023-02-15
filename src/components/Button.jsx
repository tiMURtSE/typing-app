import React from 'react';

import { StyledButton } from './styles/Button.styled';

const Button = ({ children, action, ...props}) => {
    return (
        <StyledButton onClick={() => action()} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;