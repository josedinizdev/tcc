import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/view/index'
import Home from './pages/home/index';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Services from './pages/services/listagem/index';
import Profile from './pages/profile/index';
import Gerenciar from './pages/services/usuario/index';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<View><Home /></View>} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/servicos' element={<View><Services /></View>} />
                <Route path='/perfil' element={<View><Profile /></View>} />
                <Route path='/servicos/usuario' element={<View><Gerenciar /></View>} /> 
            </Routes>
        </BrowserRouter>
    );
};