import { Container, Row, Table } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

function RoomDetail({ room }) {
    // If the room is empty, return nothing
    if (room.length === 0) {
        return null;
    }

    // Table with the room devices details, #, id, device, value (text only)
    return (
        <div >
            <Container fluid>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th><FormattedMessage id="Device" /></th>
                                <th><FormattedMessage id="Value" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {room.devices.map((device, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.desired.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
    }

export default RoomDetail