import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './registration.css';

const Registration: React.FC = () => {
  return (
    <>
      <section className="registration">
        <a
          href="./src/files/matriz_curricular.pdf"
          target="_blank"
          className="registration-link"
        >
          <span className="fa-regular fa-file-pdf registration-icon"></span>
          Matriz Curricular
        </a>
      </section>
    </>
  );
};

export default Registration;
