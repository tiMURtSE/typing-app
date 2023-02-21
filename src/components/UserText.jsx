import React from 'react';
import StyledUserText from './styles/UserText.styled';

const UserText = ({ action }) => {
    const title = 'Английксие слdsadasdasdasdasdsaasdasdassова';

    return (
        <StyledUserText>
            <div className='text'>
                {title.slice(0, 25) + '...'}
            </div>

            <div className='buttons'>
                <button type='button'>Тест</button>
                <button onClick={() => action()} type='button'>Изменить</button>
                <button type='button'>Удалить</button>
            </div>
        </StyledUserText>
    );
};

export default UserText;