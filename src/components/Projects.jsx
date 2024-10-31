import React, { useEffect, useRef } from 'react';
import { Code, Server, Database } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import imagen1 from './Captura de pantalla 2024-10-31 232832.png';
import imagen2 from './Captura de pantalla 2024-10-31 232849.png';
import imagen3 from './Captura de pantalla 2024-10-31 232858.png';
import imagen4 from './Captura de pantalla 2024-10-31 232908.png';
import imagen5 from './Captura de pantalla 2024-10-31 232915.png';
import imagen6 from './Captura de pantalla 2024-10-31 232921.png';
import imagen7 from './Captura de pantalla 2024-10-31 232927.png';
import imagen8 from './Captura de pantalla 2024-10-31 232933.png';
import imagen9 from './Captura de pantalla 2024-10-31 232942.png';
import imagen10 from './Captura de pantalla 2024-10-31 232952.png';


const Projects = () => {
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
    <section ref={sectionRef} className="projects">
      <h2>Proyectos</h2>

      <div className="project-item">
        <Server className="project-icon" color="#00aaff" size={48} />
        <div className="project-content">
          <h3>CRM para Entrenadores Personales</h3>
          <p>
            Desarrollé un CRM robusto diseñado específicamente para entrenadores personales, incorporando tres módulos clave: Marketing, Finanzas y Ejercicios y Dietas. La aplicación está construida con React en el frontend, Node.js en el backend y MongoDB como base de datos.
          </p>
          <p>
            El módulo de Marketing permite a los entrenadores gestionar sus campañas y estrategias de marketing. El módulo de Finanzas es altamente personalizable, integrando funcionalidades avanzadas mediante widgets y se conecta con APIs como Plaid para ofrecer un seguimiento financiero detallado. El módulo de Ejercicios y Dietas permite la creación de planes personalizados utilizando la API de OpenAI para generar recomendaciones inteligentes.
          </p>
          <div className="carousel-container">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7].map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Captura de pantalla ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;