import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Menu from './pages/Menu';
import Testing from './pages/Testing';
import Highscores from './pages/Highscores';
import Error from './pages/Error';
import UserTextsContext from './utils/createContext';

const App = () => {
    const [userText, setUserText] = useState({});

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        const keepTextComponentFocused = () => {
            const text = document.querySelector('.text');

            if (text) text.focus();
        }

        htmlElement.addEventListener('click', keepTextComponentFocused);
    }, []);

    return (
        <UserTextsContext.Provider value={{userText, setUserText}}>
            <div className="App">
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<Menu/>}/>
                        <Route path='/testing' element={<Testing />}/>
                        <Route path='/highscores' element={<Highscores />}/>
                        <Route path='*' element={<Error/>}/>
                    </Route>
                </Routes>
            </div>
        </UserTextsContext.Provider>
    );
}

export default App;
