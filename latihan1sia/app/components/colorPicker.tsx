"use client";

import React, { useState, useEffect } from 'react';
import ContactMe from './contactMe';

export default function colorPicker() {
  const [theme, setTheme] = useState('blue'); // tema utamanya biru

  // Terapkan kelas tema ke <body>
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = (temaBaru) => {
    setTheme(temaBaru);
  };

  return (
    <div className="tema">
      <ContactMe/>

      {/* Kotak tema di bagian bawah */}
      <div className="theme-picker">
        <div className="color-box light" onClick={() => changeTheme('light')} title="Light"></div>
        <div className="color-box dark" onClick={() => changeTheme('dark')} title="Dark"></div>
        <div className="color-box blue" onClick={() => changeTheme('blue')} title="Blue"></div>
      </div>
    </div>
  );
}
