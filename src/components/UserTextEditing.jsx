import React from 'react';

import Button from './Button';
import StyledUserTextEditing from './styles/UserTextEditing.styled';
import CustomText from '../utils/CustomText';

const UserTextEditing = ({ userTexts, setCustomTexts, userTextModal, closeModal }) => {
    const { isVisible, isEditing, editingTextId } = userTextModal;

    const getEditingText = () => {
        const textObject = userTexts.filter(text => text.id === editingTextId);

        if (textObject.toString()) {
            return textObject[0].text;
        } else {
            return null;
        }
    };

    const addCustomText = () => {
        const text = document.querySelector('.user-text-editing__textarea').value;
        const id = Date.now();
        const newText = {id, text};

        if (text) {
            CustomText.addNewText(newText);
            setCustomTexts([...userTexts, newText]);
        }

        closeModal();
    };

    const editText = () => {
        const text = document.querySelector('.user-text-editing__textarea').value;
        const newText = {id: editingTextId, text};

        if (text) {
            setCustomTexts([...userTexts.map(elem => {
                if (elem.id === editingTextId) {
                     return {id: editingTextId, text};
                } else {
                     return elem;
                }
             })]);
             
            CustomText.editText(newText, editingTextId);
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
                        action={isEditing ? editText : addCustomText}
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