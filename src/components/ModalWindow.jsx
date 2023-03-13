import React from 'react';

import Button from './Button';
import StyledModalWidnow from './styles/ModalWindow.styled';
import TestingStats from './TestingStats';

const ModalWindow = ({ modal, closeModal, startTesting, leaveTestingPage, result }) => {
    const { type, isVisible } = modal;
    let title;
    let action;

    switch (type) {
        case 'start':
            title = 'Готовы?';
            action = startTesting;
            break;
        case 'end':
            title = 'Результат:';
            action = leaveTestingPage;
            break;
        case 'delete':
            title = 'Тескт удален!'
            action = closeModal;
            break;
        default:
            break;
    }

    if (!isVisible) return null;

    return (
        <StyledModalWidnow>
            <div className='inner-window'>
                {title}

                {(type === 'end') ? <TestingStats result={result} /> : null}

                <Button action={action}>OK</Button>
            </div>
        </StyledModalWidnow>
    );
};

export default ModalWindow;