import React, { useState } from 'react';
import NewUserTextButton from '../components/NewUserTextButton';

import StyledTextBox from '../components/styles/TextBox.styled';
import UserText from '../components/UserText';
import UserTextEditing from '../components/UserTextEditing';

const Menu = () => {
    const userTextsFromStorage = JSON.parse(localStorage.getItem('user-texts')) ?? [];
    const [userTexts, setUserTexts] = useState(userTextsFromStorage);
    const [modal, setModal] = useState({isVisible: false, isEditing: true, editingTextId: null});

    const createNewUserText = () => {
        setModal({isVisible: true, isEditing: false, editingTextId: null});
    };

    return (
        <StyledTextBox>
            <div className='text-box__wrapper'>
                {userTexts.map(elem =>
                    <UserText
                        text={elem.text}
                        action={() => setModal({isVisible: true, isEditing: true, editingTextId: elem.id})}
                        key={elem.id}
                    />    
                )}

                <NewUserTextButton createNewUserText={createNewUserText} />
            </div>

            <UserTextEditing
                userTexts={userTexts}
                setUserTexts={setUserTexts}
                modal={modal}
                closeModal={() => setModal({...modal, isVisible: false})}
            />
        </StyledTextBox>
    );
};

export default Menu;