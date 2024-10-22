import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Logo from '../Logo';
import './header.css';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <Logo />
          ADS
        </a>

        <div className="share">
          <a href="#" className="fab fa-facebook-f face" target="_blank"></a>
          <a href="#" className="fab fa-twitter twitter" target="_blank"></a>
          <a
            href="https://www.instagram.com/analisedesistemasunifip/"
            className="fab fa-instagram insta"
            target="_blank"
          ></a>
          <a href="#" className="fab fa-youtube yt" target="_blank"></a>
          <a href="#" className="fab fa-discord discord"></a>
        </div>

        <div className="icons">
          <div className="fas fa-bars" id="menu-btn"></div>
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-user" id="login-btn"></div>
        </div>
      </header>
      <div className="header header-nav">
        <nav className="navbar">
          <a href="#home">Início</a>
          <a href="./src/pages/extensions.html">Extensões</a>
          <a href="./src/pages/projects.html">Projetos</a>
          <a href="./src/pages/documentations.html">Documentações</a>
          <a href="./src/pages/disciplines.html">Disciplinas</a>
          <a href="./src/pages/monitarians.html">Monitorias</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
