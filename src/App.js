import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';
import FormPage from './FormPage';
import AboutUs from './AboutUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/form" element ={<FormPage />} />
        <Route path="/about" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
};

export default App;