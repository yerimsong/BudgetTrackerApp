import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import Item from './components/item';

function Welcome() {
  return <Item />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome />;
root.render(element);
