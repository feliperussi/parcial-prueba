import './App.css';
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import Rooms from './Rooms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';

function App() {

  const [propertie, setPropertie] = useState([]);

  const [rooms, setRooms] = useState([]);

  const [connection, setConnection] = useState(false);


  const fetchData = () => {
    return fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
    .then((response) => response.json())
    .then((data) => setPropertie(data));
  }
  
  const fetchRooms = () => {
    return fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
    .then((response) => response.json())
    .then((data) => setRooms(data));
  }

  useEffect(() => {
    if(!navigator.onLine){
      if(localStorage.getItem('propertie') === null){
        setPropertie([]);
      }else{
        setPropertie(JSON.parse(localStorage.getItem('propertie')));
      }
      if(localStorage.getItem('rooms') === null){
        setRooms([]);
      }else{
        setRooms(JSON.parse(localStorage.getItem('rooms')));
      }
  } else {
    setConnection(true);
    fetchData();
    fetchRooms();
  }
  }, []);

  // Initial value is a ramdom propertie
  const [actualRooms, setActualRooms] = useState([]);

  // Show the rooms of the propertie
  function handleClick(id) {
    const room = rooms.filter((room) => room.homeId === id);
    setActualRooms(room);
    console.log(actualRooms);
  }

  if (!connection) {
    console.log("Failed!!!")
    return (
      <div className="App">
        <h1>Connection lost</h1>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <h1><FormattedMessage id="MySpaces"/> </h1>
        <Container fluid>
          <Row>
            {propertie.map((propertie) => (
              <Col>
                <Card style={{ width: '18rem' }} onClick={() => handleClick(propertie.id)}>
                  <Card.Img className="photo" variant="top" src="https://media.istockphoto.com/id/155666671/vector/vector-illustration-of-red-house-icon.jpg?s=612x612&w=0&k=20&c=tBqaabvmjFOBVUibZxbd8oWJqrFR5dy-l2bEDJMtZ40=" />
                  <Card.Body>
                    <Card.Title>{propertie.name}</Card.Title>
                    <Card.Text>
                      {propertie.address}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      </Container>
        <h1><FormattedMessage id="MyRooms"/></h1>
        <div>
          <Rooms rooms={actualRooms} />
        </div>
      </div>
    );
  
  }
}

export default App;
