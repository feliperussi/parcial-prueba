import React, { useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import RoomDetail from "./Room-detail";
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rooms(rooms) {
    const [actualDetail, setActualDetail] = useState([]);

    function handleClick(room) {
        setActualDetail(room);
        console.log(actualDetail);
    }

    return (
        <div >
            <Container fluid>
                <Row>
                    {rooms.rooms.map((room) => (
                        <Col>
                            <Card style={{ width: '18rem' }} onClick={() => handleClick(room)}>
                                <Card.Img className="photo" variant="top" src="https://img.freepik.com/vector-gratis/conjunto-dibujos-animados-mostrador-cocina-electrodomesticos-nevera-horno-microondas-hervidor-agua-licuadora_1441-1819.jpg" />
                                <Card.Body>
                                    <Card.Title>{room.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col>
                        <RoomDetail room={actualDetail} />
                    </Col>
                </Row>
            </Container>

            {/* <RoomDetail room={actualDetail} /> */}

        </div>
    );
}

export default Rooms;