import React from 'react';
import './App.css';
import KisiselBilgiler from './KisiselBilgiler';
import Egitim from './Egitim';
import IsDeneyimi from './IsDeneyimi';
import Yetenekler from './Yetenekler';
import Hobiler from './Hobiler';
import SosyalMedyaBaglantilari from './SosyalMedyaBaglantilari';

function App() {
  return (
    <div className="App">
      <h1><center>ÖZGEÇMİŞ</center></h1>
      <KisiselBilgiler />
      <Egitim />
      <IsDeneyimi />
      <Yetenekler />
      <Hobiler />
      <SosyalMedyaBaglantilari />
    </div>
  );
}

export default App;
