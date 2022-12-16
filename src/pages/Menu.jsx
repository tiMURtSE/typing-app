import React, { useEffect, useState } from 'react';

const Menu = () => {
    const [textModal, setTextModal] = useState(false);
    const selectText = () => {
        setTextModal(true);
    };

    return (
        <div>
            {
                (textModal) && (
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
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