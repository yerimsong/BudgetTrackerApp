import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import DynamicTable from './components/DynamicTable';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <h1>My Budget Tracker!</h1>
        <DynamicTable />
    </React.StrictMode>
);
