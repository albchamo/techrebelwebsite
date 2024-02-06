import React, { useEffect, useState } from 'react';
import "./AboutUs2.css"
import client from '../services/contenful';
import HeroSection from '../components/HeroSection';
import WhoWeServeSection from '../components/WhoWeServeSection';
import OurServicesSection from '../components/OurServicesSection';
import FrameworkSection from '../components/FrameworkSection';
import ValuePropsSection from '../components/ValuePropsSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AuthorCard from '../components/AuthorCard';


// Import other necessary components

const AboutUs2 = () => {
  const [pageContent, setPageContent] = useState(null);
  const authorNames = ['Alberto Chaves', 'Sergio Mora', 'Nazareno (Tuka) Rozas'];

  useEffect(() => {
    // Use the Contentful client to fetch the content for the "About Us" page
    client.getEntry('5DPM3kHwaJ0hQLgOWxcuX4')
  .then((entry) => {
    console.log('Contentful entry:', entry.fields); // Add this line for debugging
    setPageContent(entry.fields);
  })
  .catch((error) => console.log('Error fetching entry:', error)); // Update for more detailed error
  }, []);

  if (!pageContent) {
    // Display a loading state until the content is fetched
    return <p>Loading...</p>;
  }

  return (
     
    <div className="about-us">
        <h1 className='huge-title'> ABOUT US </h1>
        <HeroSection content={pageContent.heroSection} />  
        <h3 className="small-title">Who we serve</h3>
        <WhoWeServeSection content={pageContent.whoWeServes} />
        <h3 className="small-title"> Our Services</h3>
        <OurServicesSection content={pageContent.ourServices} />
        <h3 className="small-title"> Our Framework</h3>
        <FrameworkSection content={pageContent.framework} />
        <h3 className="small-title"> Why choose Us</h3>
        <ValuePropsSection content={pageContent.valueProps} />
        <h3 className="small-title"> Who we are</h3>
        <div className="authors-section">
        {authorNames.map(name => (
          <AuthorCard key={name} authorName={name} />
        ))}
          </div>

    </div>
  );
};

export default AboutUs2;

// <ValuePropsSection content={pageContent.valueProps} />