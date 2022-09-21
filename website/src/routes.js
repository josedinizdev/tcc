import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login';
import Register from './pages/register';
import Services from './pages/services/servicos/index.js';
import HeaderBar from './components/view';
import CadastrarServico from './pages/services/cadastrar/index.js'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/servicos' element={<Services />} />
                <Route path='/servicos/cadastrar' element={<CadastrarServico />} />
                <Route path='/barra' element={<HeaderBar />} />
                
            </Routes>
        </BrowserRouter>
    );
};