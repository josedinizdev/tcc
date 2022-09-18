import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login';
import Register from './pages/register';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/loginn' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};