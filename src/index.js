import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import './assets/css/Style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutpage from './pages/Aboutpage';

import MyServicepage from './pages/Myservicepage';
import Protfoliopage from './pages/Protfoliopage';
import Contactpage from './pages/Contactpage';

import Footerb from './compones/Footerb/Footerb';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <App />
    <Aboutpage></Aboutpage>
    <MyServicepage></MyServicepage>
    <Protfoliopage></Protfoliopage>
    <Contactpage></Contactpage>
    <Footerb></Footerb>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
