import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../components/ModalWindow';

import NewUserTextButton from '../components/NewUserTextButton';
import StyledTextBox from '../components/styles/TextBox.styled';
import UserText from '../components/UserText';
import UserTextEditing from '../components/UserTextEditing';
import UserTextsContext from '../utils/createContext';
import deleteText from '../utils/deleteText';
import { TESTING_ROUTE } from '../utils/routes';

const Menu = () => {
    const userTextsFromStorage = JSON.parse(localStorage.getItem('user-texts')) || [];
    const [userTexts, setUserTexts] = useState(userTextsFromStorage);
    const [userTextModal, setUserTextModal] = useState({isVisible: false, isEditing: true, editingTextId: null});
    const [modal, setModal] = useState({isVisible: false, type: 'delete'});
    const { userText, setUserText } = useContext(UserTextsContext);
    const navigate = useNavigate();

    const startTesting = (textId) => {
        const text = userTexts.filter(elem => elem.id === textId);
        setUserText(...text);
        navigate(TESTING_ROUTE);
    };

    const openUserText = () => {
        setUserTextModal({isVisible: true, isEditing: false, editingTextId: null});
    };

    const deleteUserText = (textId) => {
        setUserTexts(userTexts.filter(elem => elem.id !== textId));
        deleteText(textId);
        setModal({...modal, isVisible: true});
    };

    return (
        <StyledTextBox>
            <div className='text-box__wrapper'>
                {userTexts.map(elem =>
                    <UserText
                        text={elem.text}
                        startTesting={() => startTesting(elem.id)}
                        editText={() => setUserTextModal({isVisible: true, isEditing: true, editingTextId: elem.id})}
                        deleteText={() => deleteUserText(elem.id)}
                        key={elem.id}
                    />    
                )}

                <NewUserTextButton openUserText={openUserText} />
            </div>

            <UserTextEditing
                userTexts={userTexts}
                setUserTexts={setUserTexts}
                userTextModal={userTextModal}
                closeModal={() => setUserTextModal({...userTextModal, isVisible: false})}
            />
            <ModalWindow modal={modal} closeModal={() => setModal({...modal, isVisible: false})}/>
        </StyledTextBox>
    );
};

export default Menu;