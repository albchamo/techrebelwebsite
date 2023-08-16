import React from 'react';
import './AboutUs.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>

      <h1 className="page-title">Web3 Innovation Catalyst</h1>

      <h3>What is Tech Rebel?</h3>
      <p>
        We are a product agency that connects companies to the best teams in latam.
      </p>

      <h3>¿Why Tech Rebel?</h3>
      <p>
        In the rapidly evolving digital landscape, traditional businesses recognize the immense potential of the decentralized web (web3) and cryptocurrencies. However, not all are equipped to venture into this uncharted territory. This is where Tech Rebel comes into play. Here's how: </p>
        <ul>
          <li><strong>Discovery:</strong> We don't just jump into solutions. We dive deep into market research, exploring existing solutions, and brainstorming the most viable ones tailored for your needs.</li>
          <li><strong>Product Definition:</strong> Armed with insights from our discovery phase, we help you sculpt clear and concise PoCs or MVPs. This includes defining clear objectives, user stories, and key metrics for success.</li>
          <li><strong>Latam's Best Talent:</strong> Our strong network in Latam enables us to match your projects with the region's top developers and tech teams. This not only ensures quality but also cost-effectiveness.</li>
          <li><strong>Documentation & Handoff:</strong> We ensure that when the project moves to the development stage, there's a seamless transition. Comprehensive documentation ensures external dev teams can pick up where we left off without a hitch.</li>
        </ul>
      

      <h3>For Whom is Tech Rebel?</h3>
      <p>
        Tech Rebel is crafted for:
        <ul>
          <li><strong>Visionaries and Pioneers:</strong> For companies and founders who see beyond the present, understanding the promise and potential of web3 and blockchain technologies.</li>
          <li><strong>Enterprises Seeking an Edge:</strong> For established businesses ready to diversify their digital portfolio, seeking to tap into the world of crypto and decentralized solutions.</li>
          <li><strong>Startups with Big Dreams:</strong> For new ventures that require the expertise to lay a strong foundation in the web3 space, ensuring their journey starts on the right foot.</li>
          <li><strong>Tech Enthusiasts with Limited Resources:</strong> Whether it’s a lack of in-house expertise, tech resources, or both, Tech Rebel fills the gap, turning ideas into action.</li>
          <li><strong>Businesses Eyeing Latam's Talent:</strong> For those who have heard about the tech prowess brewing in Latam and wish to leverage it for their projects.</li>
          <li><strong>Innovators Needing Guidance:</strong> For teams that have the passion and the idea but need a roadmap to navigate the intricate maze of web3 and crypto.</li>
        </ul>
        Tech Rebel is for anyone and everyone who believes in the future of the digital world and wants a trusted partner to lead the way.
      </p>

      <SocialLinks />
    </div>
  );
};

export default AboutPage;
