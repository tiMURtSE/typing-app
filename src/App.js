import React, { useState } from 'react';
import './styles/App.css';
import Window from './components/window/Window';

const App = () => {
    const [text, setText] = useState("");

    function enterText() {
        const text = prompt("Введите текст", "");

        setText(text);
    }

    return (
        <div className='App'>
            <Window>{text}</Window>

            <button onClick={enterText} type='button'>Ввести текст</button>
        </div>
    );
};

export default App;