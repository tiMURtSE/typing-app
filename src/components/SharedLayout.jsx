import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import { StyledContainer } from './styles/Containter.styled';

const SharedLayout = () => {
    const onClick = (event) => {
        const text = document.querySelector('.text');

        // text.focus();
        // console.log(document.activeElement);
    };

    return (
        <StyledContainer className='container' onClick={onClick}>
            <Navbar />
            <Outlet />
        </StyledContainer>
    );
};

export default SharedLayout;