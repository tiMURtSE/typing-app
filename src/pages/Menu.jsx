import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../components/ModalWindow';

import NewUserTextButton from '../components/NewUserTextButton';
import StyledTextBox from '../components/styles/TextBox.styled';
import UserText from '../components/UserText';
import UserTextEditing from '../components/UserTextEditing';
import UserTextsContext from '../utils/createContext';
import CustomText from '../utils/CustomText';
import { TESTING_ROUTE } from '../utils/routes';

const Menu = () => {
    const userTextsFromStorage = JSON.parse(localStorage.getItem('user-texts')) || [];
    const [userTexts, setCustomTexts] = useState(userTextsFromStorage);
    const [userTextModal, setCustomTextModal] = useState({isVisible: false, isEditing: true, editingTextId: null});
    const [modal, setModal] = useState({isVisible: false, type: 'delete'});
    const { userText, setUserText } = useContext(UserTextsContext);
    const navigate = useNavigate();

    const startTesting = (textId) => {
        const text = userTexts.filter(elem => elem.id === textId);
        setUserText(...text);
        navigate(TESTING_ROUTE);
    };

    const openUserText = () => {
        setCustomTextModal({isVisible: true, isEditing: false, editingTextId: null});
    };

    const deleteCustomText = (textId) => {
        setCustomTexts(userTexts.filter(elem => elem.id !== textId));
        CustomText.deleteText(textId);
        setModal({...modal, isVisible: true});
    };

    return (
        <StyledTextBox>
            <div className='text-box__wrapper'>
                {userTexts.map(elem =>
                    <UserText
                        text={elem.text}
                        startTesting={() => startTesting(elem.id)}
                        editText={() => setCustomTextModal({isVisible: true, isEditing: true, editingTextId: elem.id})}
                        deleteText={() => deleteCustomText(elem.id)}
                        key={elem.id}
                    />    
                )}

                <NewUserTextButton openUserText={openUserText} />
            </div>

            <UserTextEditing
                userTexts={userTexts}
                setCustomTexts={setCustomTexts}
                userTextModal={userTextModal}
                closeModal={() => setCustomTextModal({...userTextModal, isVisible: false})}
            />
            <ModalWindow modal={modal} closeModal={() => setModal({...modal, isVisible: false})}/>
        </StyledTextBox>
    );
};

export default Menu;