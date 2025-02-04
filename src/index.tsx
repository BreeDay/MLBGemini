
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './Dashboard';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import { Hero } from './Hero';
import { LogoTicker } from './LogoTicker';
import { GoogleOAuthProvider } from "@react-oauth/google"
import { BrowserRouter } from 'react-router-dom';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <GoogleOAuthProvider clientId={CLIENT_ID as string} > */}
    {/* <App /> */}
    <Dashboard/>
    {/* <Header/> */}
    {/* <Hero/> */}
    {/* <LogoTicker/> */}
    {/* </GoogleOAuthProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
