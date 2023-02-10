import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import { StyledContainer } from './styles/Containter.styled';

const SharedLayout = () => {
    const focusBackToText = () => {
        const text = document.querySelector('.text');

        text.focus();
    };

    return (
        <StyledContainer onClick={focusBackToText}>
            <Navbar />
            <Outlet />
        </StyledContainer>
    );
};

export default SharedLayout;