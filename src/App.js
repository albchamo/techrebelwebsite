import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SingleProjectPage from './pages/SingleProjectPage';
import { LocaleProvider } from './components/LocaleContext';
import AuthorBioPage from './pages/AuthorBioPage';
import Deck from './pages/Deck';
import AboutUs2 from './pages/AboutUS2';


const App = () => {
  return (
    <>
    <LocaleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/post/:slug" element={<BlogPostPage />} />
            <Route path="/project/:id" element={<SingleProjectPage />} />
            <Route path="/author/:id" element={< AuthorBioPage />} />
            <Route path="/deck" element={<Deck/>} />
            <Route path='/AboutTest' element={<AboutUs2/>} /> 
          </Routes>
        </Router>
      </LocaleProvider>
    </>
  );
};

export default App;

//            <Route path="/test" element={<Homepage2/>} />
