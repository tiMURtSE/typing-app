import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Menu from './pages/Menu';
import Testing from './components/testing/Testing';
import { useKeyDown } from './utilities/useKeyDown';

const App = () => {


    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Menu/>}/>
                    <Route path='testing' element={<Testing/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;