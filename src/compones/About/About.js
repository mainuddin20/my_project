
import React, { Fragment } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';

const girlImage = require('../../assets/images/my.jpg'); // Assuming you have an image in the assets folder

function About(){
  return (
       
               
    <Fragment>
    <Container>
      <Row >
        <Col sm={12} md={6} lg={6}>


        <div className="box">
      <div className="content">
        <img src={girlImage} alt="Abdelrahman Atef" />
        <h2>
          Abdelrahman Atef <br />
          <span>UI Developer</span>
        </h2>
        
        <a href="#" className="btn-box">Hire Me</a>
        
      </div>
    </div>


        </Col>
        <Col sm={12} md={6} lg={6}>



        <h1>mainuddin</h1>


        
        </Col>
      </Row>
    
    </Container>
   
    </Fragment>


  );
}

export default About;
