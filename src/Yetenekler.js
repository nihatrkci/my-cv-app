import React from 'react';
import './Yetenekler.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

function Yetenekler() {
  return (
    <div className="card">
      <h2>Yetenekler</h2>
      <div className="yetenekler">
        <div className="yetenek">
          <FaHtml5 size={50} color="#e34f26" />
          <p>HTML</p>
        </div>
        <div className="yetenek">
          <FaCss3Alt size={50} color="#1572b6" />
          <p>CSS</p>
        </div>
        <div className="yetenek">
          <FaJs size={50} color="#f7df1e" />
          <p>JavaScript</p>
        </div>
        <div className="yetenek">
          <FaReact size={50} color="#61dafb" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default Yetenekler;
