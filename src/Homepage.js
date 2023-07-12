import React from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
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
                    <div className="square">
                        <h2 className='smaller-text'> 
                    
                         Contacto 
                        </h2>
                    </div>
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
        </div>
    );
};
  
  export default Homepage;