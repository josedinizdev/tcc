import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login';
import Register from './pages/register';
import Services from './services/services';
import HeaderBar from './components/view';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/servicos' element={<Services />} />
                <Route path='/barra' element={<HeaderBar />} />
            </Routes>
        </BrowserRouter>
    );
};