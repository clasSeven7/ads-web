import React from 'react';
import './course-objective.css';

const CourseObjective: React.FC = () => {
  return (
    <>
      <section className="course-objective">
        <h1 className="heading">
          Objetivo
          <span>Curso</span>
        </h1>
        <p>
          O curso de Análise e Desenvolvimento de Sistemas tem como objetivo
          formar profissionais capazes de analisar, projetar, desenvolver,
          implementar e manter sistemas de informação, com conhecimentos de
          programação, banco de dados, redes, engenharia de software, sistemas
          operacionais, entre outros.
        </p>
      </section>
    </>
  );
};

export default CourseObjective;
