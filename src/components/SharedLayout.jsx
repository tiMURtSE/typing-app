import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import { StyledContainer } from './styles/Containter.styled';

const SharedLayout = () => {
    return (
        <StyledContainer>
            <Navbar />
            <Outlet />
        </StyledContainer>
    );
};

export default SharedLayout;