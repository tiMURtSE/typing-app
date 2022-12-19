import React, { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';

const Menu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Modal visible={visible} setVisible={setVisible} modalOption={'edit'}/>

            <h3>Выбрать текст</h3>
            <div>
                <div onClick={() => setVisible(true)}>Текст 1</div>
                <div onClick={() => setVisible(true)}>Текст 2</div>
                <div onClick={() => setVisible(true)}>Текст 3</div>
            </div>
        </div>
    );
};

export default Menu;