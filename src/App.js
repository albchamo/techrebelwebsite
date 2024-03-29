import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SingleProjectPage from './pages/SingleProjectPage';
import { LocaleProvider } from './components/LocaleContext';
import AuthorBioPage from './pages/AuthorBioPage';
import Deck from './pages/Deck';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6000',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ff6000 !important',
        },
      },
    },
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
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
            
          </Routes>
        </Router>
      </LocaleProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

//            <Route path="/test" element={<Homepage2/>} />
// <Route path='/AboutTest' element={<AboutUs2/>} /> 
