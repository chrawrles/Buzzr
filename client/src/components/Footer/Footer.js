import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";

const Footer = () => (
  <div className="footer">
  <Container>
    <Row>
      <Col size='xs-3' className='hometab'>
        <a href="/"><span className='glyphicon glyphicon-home'></span><br/>Home
        </a>
      </Col>
      <Col size='xs-2' className='triviatab'>
        <a href="/Trivia"><span className='glyphicon glyphicon-question-sign'></span><br/>Trivia
        </a>
      </Col>
      <Col size='xs-3' className='logintab'>
        <a href="/restaurantsignup"><span className='glyphicon glyphicon-user'></span><br/>Host Login
        </a>
      </Col>
      <Col size='xs-2' className='signuptab'>
        <a href="/signup"><span className='glyphicon glyphicon-pencil'></span><br/>Sign Up!
        </a>
      </Col>
  </Row>
  </Container>
  </div>
);

export default Footer;
