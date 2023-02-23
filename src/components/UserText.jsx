import React from 'react';
import StyledUserText from './styles/UserText.styled';

const UserText = ({ text, action }) => {

    return (
        <StyledUserText>
            <div className='user-text__text' onClick={() => console.log(2)}>
                {text}
            </div>

            <div className='user-text__buttons'>
                <button type='button'>Тест</button>
                <button onClick={() => action()} type='button'>Изменить</button>
                <button type='button'>Удалить</button>
            </div>
        </StyledUserText>
    );
};

export default UserText;