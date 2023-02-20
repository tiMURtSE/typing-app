import React from 'react';
import StyledUserText from './styles/UserText.styled';

const UserText = () => {

    const title = 'Английксие слdsadasdasdasdasdsaasdasdassова';

    return (
        <StyledUserText>
            <div className='text'>
                {title.slice(0, 20) + '...'}
            </div>

            <div>
                <button type='button'>Тест</button>
                <button type='button'>Изменить</button>
                <button type='button'>Удалить</button>
            </div>
        </StyledUserText>
    );
};

export default UserText;