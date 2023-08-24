import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SingleProjectPage from './pages/SingleProjectPage';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig, ethereumClient, projectId } from "./services/Web3ModalConfig";

const App = () => {
  return (
    <>
      {/* Wrapping the app with WagmiConfig for Ethereum integration */}
      <WagmiConfig config={wagmiConfig}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            <Route path="/project/:id" element={<SingleProjectPage />} />
          </Routes>
        </Router>
        {/* Web3Modal for Ethereum wallet connection */}
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </>
  );
};

export default App;