import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Land from './pages/Land';
import Main from './pages/Main';
import NoPage from './pages/NoPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Land />} />
                    <Route path='/welcome' element={<Land />} />
                    <Route path='/home' element={<Main />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
