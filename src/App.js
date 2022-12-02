import './App.css';
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';

function App() {

  const [propertie, setPropertie] = useState([]);

  const fetchData = () => {
    return fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
          .then((response) => response.json())
          .then((data) => setPropertie(data));
  }

  useEffect(() => {
    fetchData();
  }
  , []);

  // Show properties 1x3 in a row
  return (
    <div className="App">
      <h1>Properties</h1>
      <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
      
      {/* <ul>
        {propertie.map((propertie) => (
          <li key={propertie.id}>
            <h2>{propertie.name}</h2>
            <p>{propertie.address}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );

}

export default App;
