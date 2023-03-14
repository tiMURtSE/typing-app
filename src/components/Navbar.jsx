import React from 'react';
import { NavLink } from 'react-router-dom';
// import background from '../assets/icons8-клавиатура-750.png';

import StyledNavbar from './styles/Navbar.styled';

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavLink className='navbar__logo' to={'/'}></NavLink>

            <nav className='navbar__nav'>
                <NavLink to={'/'}>Меню</NavLink>
                <NavLink to={'/testing'}>Тестирование</NavLink>
                <NavLink to={'/highscores'}>Рекорды</NavLink>
            </nav>
        </StyledNavbar>
    );
};

export default Navbar;