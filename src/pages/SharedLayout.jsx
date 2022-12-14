import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <nav className='nav'>
                <NavLink to='/' className='nav__link'>Меню</NavLink>
                <NavLink to='/testing' className='nav__link'>Тестирование</NavLink>
            </nav>

            <Outlet/>
        </div>
    );
};

export default SharedLayout;