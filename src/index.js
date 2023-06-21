import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import style from './index.module.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Main from './assets/Components/Main/Main'
import Footer from './assets/Components/Footer/Footer'
import Gallery from './assets/Components/Gallery/Gallery'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  </React.StrictMode>
);

function Wrapper() {
  const [isPopupActive, setPopupActive] = useState(false);

  const handlePopupClick = () => {
    setPopupActive(!isPopupActive);
    document.body.classList.toggle('_lock');
  }

  return (
    <div className={style.wrapper}>
      <Header handlePopupClick={handlePopupClick} />
      <Routes>
        <Route path="/" element={<Main isPopupActive={isPopupActive} handlePopupClick={handlePopupClick} />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
