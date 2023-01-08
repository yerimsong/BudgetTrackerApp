import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import Item from './components/newitem';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Item />
  </React.StrictMode>
);
