import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

import './inscription.css';

const Inscription: React.FC = () => {
  return (
    <>
      <section className="inscription">
        <a
          href="https://www.studus.com.br/StudusFIP/inscricaoonline/inscricaoonline.xhtml?curso=ADS"
          target="_blank"
          className="inscription-link"
        >
          <span className="fa-regular fa-pen-to-square inscription-icon"></span>
          Faça já sua inscrição
        </a>
      </section>
    </>
  );
};

export default Inscription;
