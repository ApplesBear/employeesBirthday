import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainStructure from './mainStructure';
import Scroll from './scroll-left-side';



ReactDOM.render(
  <React.StrictMode>
    <MainStructure />
  </React.StrictMode>,
  document.getElementById('root')
);

Scroll();

