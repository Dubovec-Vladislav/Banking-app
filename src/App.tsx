import React, { useState, FC } from 'react'
import style from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Main from './assets/Components/Main/Main'
import Gallery from './assets/Components/Gallery/Gallery'
import Footer from './assets/Components/Footer/Footer'
import Popup from './assets/Components/General/Popup/Popup'

const App: FC = () => {
  const [isPopupActive, setPopupActive] = useState(false);

  const handlePopupClick = () => {
    setPopupActive(!isPopupActive);
    document.body.classList.toggle('_lock');
  }

  return (
    <div className={style.wrapper}>
      <Popup isPopupActive={isPopupActive} handlePopupClick={handlePopupClick} />
      <Header handlePopupClick={handlePopupClick} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;