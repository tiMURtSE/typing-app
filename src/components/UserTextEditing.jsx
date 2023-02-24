import React from 'react';

import Button from './Button';
import StyledUserTextEditing from './styles/UserTextEditing.styled';
import setUserTextInStorage from '../utils/setNewUserText';

const UserTextEditing = ({ userTexts, setUserTexts, userTextModal, closeModal }) => {
    const { isVisible, isEditing, editingTextId } = userTextModal;

    const getEditingText = () => {
        const textObject = userTexts.filter(text => text.id === editingTextId);

        if (textObject.toString()) {
            return textObject[0].text;
        } else {
            return null;
        }
    };

    const createUserText = () => {
        const text = document.querySelector('.user-text-editing__textarea').value;
        const id = Date.now();
        const newText = {id, text};

        if (text) {
            setUserTextInStorage(newText);
            setUserTexts([...userTexts, newText]);
        }

        closeModal();
    };

    const changeText = () => {
        const text = document.querySelector('.user-text-editing__textarea').value;
        const newText = {id: editingTextId, text};

        if (text) {
            setUserTexts([...userTexts.map(elem => {
                if (elem.id === editingTextId) {
                     return {id: editingTextId, text};
                } else {
                     return elem;
                }
             })]);
            setUserTextInStorage(newText, editingTextId);
        }

        closeModal();
    };

    if (!isVisible) return null;

    return (
        <StyledUserTextEditing>
            <div className='user-text-editing__content'>
                <textarea
                    defaultValue={getEditingText()}
                    className='user-text-editing__textarea'
                    autoFocus 
                />

                <div className='user-text-editing__buttons'>
                    <Button
                        action={isEditing ? changeText : createUserText}
                        className='user-text-editing__button'
                        backgroundColor='#fff'
                    >
                        {(isEditing) ? (
                            'Применить изменения'
                        ) : (
                            'Создать'
                        )}
                    </Button>
                    <Button
                        action={closeModal}
                        className='user-text-editing__button'
                        backgroundColor='#fff'
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        </StyledUserTextEditing>
    );
};

export default UserTextEditing;