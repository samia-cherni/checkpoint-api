import React from "react";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";


const User = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Img src="/usericon.png" />
        <Card.Body>
          <Card.Title className="pink">{el.username}</Card.Title>
          <Card.Text>
            name: {el.name}
            <br />
            e-mail: {el.email}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {el.address.city}, {el.address.street} - {el.address.zipcode}
          </ListGroupItem>
          <ListGroupItem>{el.phone}</ListGroupItem>
          <ListGroupItem>
            <Card.Link href="#" className="pink">{el.website}</Card.Link>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
