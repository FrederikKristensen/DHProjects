import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            App 1
            <button>Default</button>
          </Col>
          <Col>
            App 2
          </Col>
          <Col>
            App 3
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
