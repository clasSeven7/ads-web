import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './information.css';

const Information: React.FC = () => {
  return (
    <>
      <section className="information">
        <div className="info-left">
          <div className="info-1">
            <span className="fa-solid fa-dollar-sign info-bold"></span>
            <span className="info-bold">Matrícula:</span>
            <span>R$ 688,00</span>
          </div>
          <div className="info-2">
            <span className="fa-solid fa-dollar-sign info-bold"></span>
            <span className="info-bold">Mensalidade:</span>
            <span>R$ 670,00</span>
          </div>
          <div className="info-3">
            <span className="fa-regular fa-clock info-bold"></span>
            <span className="info-bold">Turno:</span>
            <span>Noturno</span>
          </div>
          <div className="info-4">
            <span className="fas fa-graduation-cap info-bold"></span>
            <span className="info-bold">Duração:</span>
            <span>2 anos e meio</span>
          </div>
        </div>
        <div className="info-right">
          <div className="info-5">
            <span className="fas fa-map-marker-alt info-bold"></span>
            <span className="info-bold">Local:</span>
            <span>Patos, Brasil</span>
          </div>
          <div className="info-6">
            <span className="fa-solid fa-book info-bold"></span>
            <span className="info-bold">Coordenador:</span>
            <span>Sormany Silva Dantas</span>
          </div>
          <div className="info-7">
            <span className="fa-solid fa-envelope info-bold"></span>
            <span className="info-bold">Email:</span>
            <span>coordenacao@ads.fiponline.edu.br</span>
          </div>
          <div className="info-8">
            <span className="fa-solid fa-mobile info-bold"></span>
            <span className="info-bold">Contado:</span>
            <span>(83) 3421-4047</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
