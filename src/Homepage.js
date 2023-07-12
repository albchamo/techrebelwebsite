import React from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    const handleSquareClick = (url) => {
        window.open(url, '_blank');
      };

    const handleEmailClick = () => {
        alert('Contact me at alberto@albertochaves.com');
      };


    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        <h1 className = "title"> 
                        
                        TechRebel
                        </h1> 
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">

                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        <h2 className='smaller-text'> 
                    
                        Proyectos 
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square"></div>
                    </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={() => handleSquareClick('https://twitter.com/TechRebelWorld')}>
                        <h2 className='smaller-text'> 
                         Twitter 
                        </h2>
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={handleEmailClick} > 
                        <h2 className='smaller-text'> 
                         Email 
                        </h2>  
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={() => handleSquareClick('https://www.linkedin.com/in/alberto-chaves-costarica/')}>
                        <h2 className='smaller-text'> 
                         Linkedin
                        </h2> 
                    </div>
                </div>
            </div>
        </div>
    );
};
  
  export default Homepage;