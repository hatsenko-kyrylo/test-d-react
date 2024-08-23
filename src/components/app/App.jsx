import { Routes, Route } from 'react-router-dom';
import Actions from '../ActionButtons';

import './App.css';
import AllFilesPage from '../../pages/AllFilesPage';
import SignaturesPage from '../../pages/SignaturesPage';

function App() {
    return (
        <div className='app'>
            <Actions />
            <Routes>
                <Route path='/' element={<AllFilesPage />} />
                <Route path='/signatures' element={<SignaturesPage />} />
            </Routes>
        </div>
    );
}

export default App;
