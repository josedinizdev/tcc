import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/view'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Services from './pages/services';
import Profile from './pages/profile';
import Footer from './components/footer';
import JuntarSe from './components/juntarse';
import AdmAndamentoPage from './pages/admin/andamento';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<View><Home /> <Footer /> </View> } />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/servicos' element={<View><Services /> <Footer /> </View>} />
                <Route path='/perfil' element={<View><Profile /> <Footer /> </View>} />
                <Route path='/perfil/adm/andamento' element={<View><AdmAndamentoPage />  </View>} />
                <Route path='/juntar' element={<JuntarSe />} />
                <Route path='/footer' element={<Footer />} />
            </Routes>
        </BrowserRouter>
    );
};