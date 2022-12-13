import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Меню</NavLink>
                <NavLink to='/testing'>Тестирование</NavLink>
            </nav>

            <Outlet/>
        </div>
    );
};

export default SharedLayout;