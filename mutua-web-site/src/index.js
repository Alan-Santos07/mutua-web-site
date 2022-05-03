import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home.js';
import CaiporaPage from './pages/caipora';
import CasteloPage from './pages/castelo';
import QuemSomos from './pages/quem-somos';

const rotas = (
  <Router>
    <Routes>
      <Route path = "/" element = { <Home /> } />
      <Route path = "/eu-sou-caipora" element = { <CaiporaPage /> } />
      <Route path = "/castelo-ra-tim-bum" element = { <CasteloPage /> } />
      <Route path = "/quem-somos" element = { <QuemSomos /> } />
    </Routes>
  </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));
