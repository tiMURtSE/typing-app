import React from 'react';

import StyledUserText from './styles/UserText.styled';

const UserText = ({ text, startTesting, editText, deleteText }) => {

    return (
        <StyledUserText>
            <div className='user-text__text'>
                {text}
            </div>

            <div className='user-text__buttons'>
                <button onClick={startTesting} type='button'>Тест</button>
                <button onClick={editText} type='button'>Изменить</button>
                <button onClick={deleteText} type='button'>Удалить</button>
            </div>
        </StyledUserText>
    );
};

export default UserText;