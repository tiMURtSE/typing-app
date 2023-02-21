import React, { useState } from 'react';
import ModalWindow from '../components/ModalWindow';

import StyledTextBox from '../components/styles/TextBox.styled';
import UserText from '../components/UserText';

const Menu = () => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <StyledTextBox>
            <div className='user-text-wrapper'>
                <UserText action={() => setIsModalActive(true)} />
                <UserText />
                <UserText />
            </div>

            <ModalWindow isVisible={isModalActive} closeModal={() => setIsModalActive(false)}/>
        </StyledTextBox>
    );
};

export default Menu;