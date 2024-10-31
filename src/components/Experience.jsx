import React, { useEffect, useRef } from 'react';

const Experience = () => {
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
    <section ref={sectionRef} className="experience">
      <h2>Experiencia</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Desarrollador En Proyectos Personales</h3>
            <p className="date">Diciembre 2023 - Actualidad</p>
            <p>
              Como freelance, he trabajado diversos proyectos con el fin de poner en practica mi conocimiento en casos reales. Desarrollé aplicaciones completas utilizando tecnologías como Node.js, Express y MongoDB en el backend, y React en el frontend. Mi rol incluyó desde la planificación y diseño hasta la implementación y el despliegue, siempre buscando entregar productos de alta calidad que cumplieran con los requisitos del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;