import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Slider from './Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <NavLink to="/1">1</NavLink>
      </div>
      <div>
        <NavLink to="/2">2</NavLink>
      </div>
      <div>
        <NavLink to="/3">3</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/1" element={"1"}></Route>
        <Route path="/2" element={"2"}></Route>
        <Route path="/3" element={"3"}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
