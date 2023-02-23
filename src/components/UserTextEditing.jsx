import React from 'react';
import setNewUserTextInStorage from '../utils/setNewUserText';
import Button from './Button';

import StyledUserTextEditing from './styles/UserTextEditing.styled';

const UserTextEditing = ({ userTexts, setUserTexts, modal, closeModal }) => {
    const { isVisible, isEditing, editingTextId } = modal;

    const createUserText = () => {
        const text = document.querySelector('.user-text-editing__textarea').value;
        const id = userTexts.length + 1;
        const newText = {id, text};

        if (text) {
            setNewUserTextInStorage(newText);
            setUserTexts([...userTexts, newText]);
        }

        closeModal();
    };

    const getEditingText = () => {
        const textObject = userTexts.filter(text => text.id === editingTextId);

        if (textObject.toString()) {
            return textObject[0].text;
        } else {
            return null;
        }
    };

    const changeEditingText = () => {
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
            setNewUserTextInStorage(newText, editingTextId);
        }

        closeModal();
    };

    const editText = (event) => {
        const value = event.target.value;

        setUserTexts([...userTexts.filter(text => text.id !== editingTextId), {id: editingTextId, text: value}]);
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
                        action={isEditing ? changeEditingText : createUserText}
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