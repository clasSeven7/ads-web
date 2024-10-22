import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Análise e Desenvolvimento de Sistemas</h3>
          <div className="text-content">
            <span>Tecnólogo</span>
            <span className="text-warning">•</span>
            <span>Noturno</span>
            <span className="text-warning">•</span>
            <span>2 anos e meio</span>
          </div>
          <a href="#" className="btn btn-home">
            Acesse aqui
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
