import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './Root/Root'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Combate from './menuInicial/Combate/combate';
import Pokemon from './menuInicial/Pokemon/Pokemon'
import Historial from './menuInicial/Historial/historial';
import Lista from './menuInicial/Lista/lista';
import Inicio from './menuInicial/Inicio/inicio'



// import Menu from './menuInicial/menu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Root />}>
        <Route path='/inicio' element={ <Inicio /> } />
          <Route path='/pokemon' element={ <Pokemon/> } />
          <Route path='/combate' element={ <Combate/> } />
          <Route path='/historial' element={ <Historial/> } />
          <Route path='/lista' element={ <Lista /> } />          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
