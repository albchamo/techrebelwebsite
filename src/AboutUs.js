import React from 'react';
import './AboutUs.css';
import Navbar from './components/Navbar';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>
      <p>
        En Tech Rebel, entendemos que la innovación no es un proceso lineal. <br/>
        Se trata de iterar constantemente, moverse rápidamente y validar ideas antes de comprometer recursos significativos.<br/><br/>
        Con nuestra experiencia en los departamentos de investigación y desarrollo (I+D) de empresas como Omni y BeInCrypto.com, hemos sido testigos de los desafíos de innovar sin un marco claro.<br/><br/>
        Por eso recomendamos un enfoque de dos vertientes para la I+D, dividiéndola en:<br/><br/>
        Investigación, Ideación y Prototipado:<br/>
        En esta división, operamos en ciclos más cortos, a veces tan breves como una o dos semanas, dependiendo de lo que necesite validación. Empleamos sprint de diseño, que nos permite avanzar rápidamente desde la investigación hasta el prototipado y la validación del usuario.<br/><br/>
        Además, esta división se encarga de comunicar la esencia de un producto, una nueva característica o cualquier conocimiento acumulado en torno a un producto. Lo más importante es asegurarnos de que la propuesta de valor esté en primer plano. Nada debe avanzar al desarrollo sin un claro razonamiento empresarial o de producto.<br/><br/>
        Desarrollo, Lanzamiento y Medición:<br/>
        Con propuestas de valor validadas, tiene sentido asignar recursos para llevarlas al mercado. Esta división se enfoca en refinar el diseño y desarrollar el producto o característica. Consideramos estrategias de lanzamiento al mercado, adquisición de usuarios y medición. Esta fase implica esfuerzos operativos más costosos. El objetivo es lanzar y lograr la adaptación al mercado del producto mientras se recibe retroalimentación e identifican oportunidades para que la primera división las explore.<br/><br/>
        En Tech Rebel, estamos apasionados por construir productos notables a través de un enfoque disciplinado pero ágil. Creemos en capacitar a las empresas para que interrumpan e innoven, asegurando que sus esfuerzos estén guiados por información de los usuarios y una propuesta de valor clara.
      </p>
    </div>
  );
};

export default AboutPage;
