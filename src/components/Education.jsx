import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="education">
      <h2>Educación</h2>
      <div className="education-grid">
        <div className="education-item">
          <h3>Bachiller Social</h3>
          <p className="institution">Ies L'Eliana</p>
          <p className="date">2021 - 2023</p>
        </div>
        <div className="education-item">
          <h3>Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h3>
          <p className="institution">Aula Campus</p>
          <p className="date">2023 - 2025</p>
          <p>
            Durante mi formacion en Aula Campus en DAM he adquirido sólidos conocimientos en programación orientada a objetos, bases de datos, y desarrollo de aplicaciones. Además, he fortalecido mis habilidades en diseño de interfaces, gestión de proyectos y metodologías ágiles, permitiéndome crear aplicaciones funcionales y optimizadas.
          </p>
        </div>
        <div className="education-item">
          <h3>Formación Autodidacta</h3>
          <p className="institution">Aprendizaje Continuo</p>
          <p>
            De manera autodidacta, he aprendido a programar en Node.js y React a través de cursos en línea, videos tutoriales y la práctica constante. Este enfoque me ha permitido profundizar en estas tecnologías a mi propio ritmo, desarrollando proyectos personales y resolviendo problemas reales, lo que me ha brindado una comprensión sólida y práctica de cada una de ellas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;