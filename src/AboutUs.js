import React, { useState } from 'react';
import './AboutUs.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>

      <div className="accordion-section" onClick={() => toggleSection('intro')}>
        <h2>Tech Rebel: Acelerando la Innovación en el Mundo Web3</h2>
        {activeSection === 'intro' && <p>...</p>} 
      </div>

      <div className="accordion-section" onClick={() => toggleSection('what')}>
        <h3>¿Qué es Tech Rebel?</h3>
        {activeSection === 'what' && (
          <p>
            Tech Rebel es una micro agencia especializada en la definición y prototipado de proyectos innovadores, en particular aquellos relacionados con web3 y criptomoneda. A diferencia de las agencias tradicionales de desarrollo, Tech Rebel se centra en las primeras fases del ciclo de vida del producto, desde la conceptualización hasta la creación de prototipos.
          </p>
        )}
      </div>

      <div className="accordion-section" onClick={() => toggleSection('why')}>
        <h3>¿Por qué Tech Rebel?</h3>
        {activeSection === 'why' && (
          <p>
            Muchas empresas, fintechs y bancos tienen una visión clara o una idea de cómo podría ser su solución blockchain, pero carecen de la experiencia o de los recursos internos para traducir esa idea en un producto viable. Tech Rebel llena ese vacío al proporcionar:
            <ul>
              <li>Investigación profunda: Entendiendo el mercado, identificando problemas y desarrollando personajes.</li>
              <li>Ideación y Priorización: Generación de soluciones potenciales y priorización basada en el valor del negocio y la viabilidad técnica.</li>
              <li>Prototipado: Creación de maquetas, flujos de usuario y, si es necesario, pruebas en plataformas low-code para probar y validar la idea.</li>
            </ul>
            Una vez que el prototipo ha sido definido y validado, Tech Rebel conecta a los clientes con equipos de desarrollo autogestionados que tienen la experiencia técnica para hacer realidad estas soluciones. Estos equipos pueden presupuestar y desarrollar un PoC o MVP basado en las especificaciones proporcionadas, permitiendo que las empresas avancen rápidamente con una solución viable sin incurrir en los altos costos asociados con el desarrollo interno o la contratación de equipos a tiempo completo.
          </p>
        )}
      </div>

      <div className="accordion-section" onClick={() => toggleSection('who')}>
        <h3>¿Para quién es Tech Rebel?</h3>
        {activeSection === 'who' && (
          <p>
            <ul>
              <li>Inversores: Que ven el potencial de la tecnología blockchain pero necesitan ayuda para traducir esas ideas en soluciones prácticas.</li>
              <li>Empresas establecidas: Que desean explorar nuevas ofertas o servicios basados en blockchain, pero cuyos recursos ya están comprometidos o no tienen la experiencia necesaria en cripto.</li>
              <li>Startups y fintechs: Que desean innovar en el espacio web3 y cripto, pero necesitan guía y definición en sus primeras etapas.</li>
            </ul>
          </p>
        )}
      </div>

      <div className="accordion-section" onClick={() => toggleSection('conclusion')}>
        <h3>Conclusión</h3>
        {activeSection === 'conclusion' && (
          <p>
            Tech Rebel no es solo una agencia; es un puente hacia el futuro de la innovación web3. Con un equipo experto, una red de desarrolladores autogestionados y una pasión por la definición y creación de prototipos, Tech Rebel es el aliado perfecto para aquellos que buscan explorar, innovar y definir su futuro en el mundo de la criptomoneda y web3.
            No somos solo consultores, somos tus aliados. En Tech Rebel, combinamos la audacia de la innovación con la elegancia de la estrategia. Si estás buscando liderar en el mundo web3 con estilo y confianza, has encontrado tu hogar.
          </p>
        )}
      </div>
      <SocialLinks />
    </div>
  );
};

export default AboutPage;
