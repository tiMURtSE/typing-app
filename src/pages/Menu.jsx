import React, { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';

const Menu = () => {
    const [textModal, setTextModal] = useState(false);
    const selectText = () => {
        setTextModal(true);
    };

    return (
        <div>
            {
                (textModal) && (
                    <Modal option='edit'/>
                )
            }

            <h3>Выбрать текст</h3>
            <div>
                <div onClick={selectText}>Текст 1</div>
                <div onClick={selectText}>Текст 2</div>
                <div onClick={selectText}>Текст 3</div>
            </div>
        </div>
    );
};

export default Menu;