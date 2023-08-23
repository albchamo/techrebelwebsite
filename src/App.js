import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SingleProjectPage from './pages/SingleProjectPage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/project/:id" element={<SingleProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;