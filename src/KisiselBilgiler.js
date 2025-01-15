import React from 'react';
import './KisiselBilgiler.css';

function KisiselBilgiler() {
  return (
    <div className="card">
      <h2>Kişisel Bilgiler</h2>
      <p><strong>Ad:</strong> Nihat</p>
      <p><strong>Soyad:</strong> Tarakçı</p>
      <p><strong>Telefon:</strong> +90 537 470 9060</p>
      <p><strong>Email:</strong> nihatrkc@icloud.com</p>
      <div className="KisiselBilgiler">
        <img src="profil-foto.jpg" alt="Nihat Tarakçı" />
      </div>
    </div>
  );
}

export default KisiselBilgiler;
