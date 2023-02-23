import React from 'react';

import StyledNewUserTextButton from './styles/NewUserTextButton';

const NewUserTextButton = ({ createNewUserText }) => {
    return (
        <StyledNewUserTextButton>
            <div
                className='new-user-text__inner'
                onClick={createNewUserText}
            >
                <span className='new-user-text__label'>Новый текст</span>
            </div>
        </StyledNewUserTextButton>
    );
};

export default NewUserTextButton;