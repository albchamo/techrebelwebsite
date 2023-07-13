import React from 'react';
import { Link } from 'react-router-dom';
import ApplyForm from './components/ApplyForm';
import Button from './components/Button';
import Navbar from './components/Navbar';
import './Formpage.css'


const FormPage = () => {
  return (
    <div className='form-page'>
      <header>
        <Navbar />
        </header>
      <ApplyForm />
        <Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Go Back
          </Link>
      </Button>
    </div>
  );
};

export default FormPage;
