import React, { useEffect, useState } from 'react';
import "./AboutUs.css"
import client from '../services/contenful';
import HeroSection from '../components/HeroSection';
import WhoWeServeSection from '../components/WhoWeServeSection';
import OurServicesSection from '../components/OurServicesSection';
import FrameworkSection from '../components/FrameworkSection';
import ValuePropsSection from '../components/ValuePropsSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AuthorCard from '../components/AuthorCard';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';
import { useLocale } from '../components/LocaleContext';


// Import other necessary components

const AboutUs = () => {
  const [pageContent, setPageContent] = useState(null);
  const authorNames = ['Alberto Chaves', 'Sergio Mora', 'Nazareno (Tuka) Rozas'];
  const { locale } = useLocale();


  useEffect(() => {
    // Use the Contentful client to fetch the content for the "About Us" page
    client.getEntry('5DPM3kHwaJ0hQLgOWxcuX4', { locale: locale })
      .then((entry) => {
        console.log('Contentful entry:', entry.fields); // Debugging line
        setPageContent(entry.fields);
      })
      .catch((error) => console.log('Error fetching entry:', error));
  }, [locale]); // Add locale to the dependency array

  if (!pageContent) {
    // Display a loading state until the content is fetched
    return <p>Loading...</p>;
  }

  return (
    <div className="about-us">
           <Navbar/> 

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
          <BackButton text="Back" onClick={() => window.history.back()} />
    </div>
  );
};

export default AboutUs;

// <ValuePropsSection content={pageContent.valueProps} />