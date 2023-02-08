import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Menu from './pages/Menu';
import Testing from './pages/Testing';
import Highscores from './pages/Highscores';
import Error from './pages/Error';

const App = () => {

    return (
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
    );
}

export default App;
