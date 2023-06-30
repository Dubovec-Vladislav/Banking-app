import React, { useState } from 'react'
import style from './app.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Main from './assets/Components/Main/Main'
import Gallery from './assets/Components/Gallery/Gallery'
import Footer from './assets/Components/Footer/Footer'
import Popup from './assets/Components/General/Popup/Popup'

function App() {
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
        <Route path="/" element={<Main isPopupActive={isPopupActive} handlePopupClick={handlePopupClick} />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;