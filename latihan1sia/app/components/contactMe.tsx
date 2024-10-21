"use client";

import React, { useState } from 'react';

// components/ContactForm.jsx
export default function Contact() {
    const [formContact, setFormContact] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const ubahPesan = (e) => {
      const { name, value } = e.target;
      setFormContact({ ...formContact, [name]: value });
    };
  
    const submitPesan = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };
  
    const hapusPesan = () => {
      setFormContact({ name: '', email: '', message: '' });
    };
  
    return (
      <div className="container mx-auto p-2">
            <div className="container mx-auto p-2 text-center pt-20">               
              </div>

        {!isSubmitted ? (
          <form onSubmit={submitPesan} className="form">
            <h2 className="text-2x1 text-center ">Hubungi saya</h2><br></br>
            <div className="inputGroup">
              <label className="label">Nama:</label>
              <input
                type="text"
                name="name"
                value={formContact.name}
                onChange={ubahPesan}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                value={formContact.email}
                onChange={ubahPesan}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Message:</label>
              <textarea
                name="message"
                value={formContact.message}
                onChange={ubahPesan}
                required
                className="textarea"
              />
            </div>
            <div className="buttonGroup">
              <button type="submit" className="button">
                Submit
              </button>
              <button type="button" onClick={hapusPesan} className="button">
                Clear
              </button>
            </div>
          </form>
        ) : (
          <div className="hasil">
            <h2>Terimakasih!</h2>
            <p>Nama: {formContact.name}</p>
            <p>Email: {formContact.email}</p>
            <p>Pesan: {formContact.message}</p>
            <p>Data diatas akan segera di input ke database. Terimakasih!</p>
          </div>
        )}
      </div>
    );
  }
