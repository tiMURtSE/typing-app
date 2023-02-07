import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNavbar } from './styles/Navbar.styled';

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavLink to={'/'}>Меню</NavLink>
            <NavLink to={'/testing'}>Тестирование</NavLink>
            <NavLink to={'/highscores'}>Рекорды</NavLink>
        </StyledNavbar>
    );
};

export default Navbar;