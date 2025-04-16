import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './input.css';
import MensCollection from './components/collection/menCollections';
import WomenCollection from './components/collection/womenCollection';
import SportCollection from './components/collection/sportCollection';
import AllCollection from './components/collection/allCollection';
import { Heading1 } from 'lucide-react';
import SaleCollection from './components/collection/saleCollection';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

    <Routes>

      <Route path='/'  element={<Home />}/>

      <Route path='/men' element ={<MensCollection /> } />

      <Route path='/women' element ={<WomenCollection />} />

      <Route path='/sport' element ={<SportCollection/>} />

      <Route path='/collection' element ={<AllCollection/>} />

      <Route path='/sale' element ={<SaleCollection/>}/>

    </Routes>

    
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
