import React from 'react';
import { Mail, Phone, FileText } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-item">
        <Mail className="contact-icon" />
        <a href="mailto:sebastiangonzalezrebecchi@gmail.com" className="contact-link">sebastiangonzalezrebecchi@gmail.com</a>
      </div>
      <div className="contact-item">
        <Phone className="contact-icon" />
        <span className="contact-link">+34 663 493 484</span>
      </div>
      <div className="contact-item">
        <FileText className="contact-icon" />
        <a href="/curriculum.pdf" target="_blank" rel="noreferrer" className="contact-link">Descargar CV</a>
      </div>
    </footer>
  );
};

export default Footer;