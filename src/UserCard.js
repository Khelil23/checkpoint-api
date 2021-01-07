
import React from 'react'
import {Container ,Row,Col,Card, Button} from 'react-bootstrap'
const UserCard = ({ user }) => {
    return (
      <Container>
        <Row>
          <Col>
          <div>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <div>
                  <p>{user.email}</p> <span>{user.phone}</span>
                  </div>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          </Col>
        </Row>

      </Container>
    );
  };
  export default UserCard;