import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';
import FormPage from './FormPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/form" element ={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;