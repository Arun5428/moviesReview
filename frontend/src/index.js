import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/*' element={<App/>}/>
    {/* <Route path='/' element={<Layout/>}/>
    <Route path='/' element={<Home/>}></Route> */}
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


