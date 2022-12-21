import React, { useEffect, useState } from 'react';
import CustomText from '../components/customText/CustomText';
import Modal from '../components/modal/Modal';
import Button from '../components/UI/button/Button';

const Menu = () => {
    const [visible, setVisible] = useState(false);
    const [customTexts, setCustomText] = useState([
        {id: 1, content: 'hello world'},
        {id: 2, content: 'Текст Текст Текст'},
    ]);

    return (
        <div>
            <Modal visible={visible} setVisible={setVisible} modalOption={'edit'}/>

            <h3>Выбрать текст</h3>
            <div>
                {customTexts.map(text =>
                    <CustomText text={text.content} setVisible={setVisible} key={text.id}/>    
                )}
            </div>
            {/* <Button onClick={}>Добавить текст</Button> */}
        </div>
    );
};

export default Menu;