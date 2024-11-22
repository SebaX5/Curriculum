import React, { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    header.classList.add('visible');
  }, []);

  return (
    <header className="header">
      <h1 className="name">Sebastián González Rebecchi</h1>
      <h2 className="title">Desarrollador Multiplataforma</h2>
      <div className="social-links">
        <a 
          href="https://github.com/SebaX5" 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
        >
          <Github className="icon" /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
