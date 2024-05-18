import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import {HelmetProvider } from 'react-helmet-async'
import {createRoot} from 'react-dom/client'


const root = createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Suspense>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

