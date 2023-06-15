import React from 'react'
import ReactDOM from 'react-dom/client'
import style from './index.module.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Main from './assets/Components/Main/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
