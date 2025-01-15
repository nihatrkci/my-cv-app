import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function SosyalMedyaBaglantilari() {
  return (
    <div className="card">
      <h2>Sosyal Medya Bağlantıları</h2>
      <div className="SosyalMedyaBaglantilari">
        <a href="https://www.linkedin.com/in/nihat-tarak%C3%A7%C4%B1-555070224/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://x.com/nihatrkc" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
        <a href="https://www.instagram.com/nihatrkc" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
      </div>
    </div>
  );
}

export default SosyalMedyaBaglantilari;
