import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";



const Details = (props) => {
  const {id}  = props.match.params;
  const [posts, setPosts] = useState([]);
  const getPosts  = useCallback( () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  },[]);
  useEffect(() => {   
    getPosts();
  }, []);
  return (
    <div className="container">
      <div className="row">
      {posts.map((el, key) => (
        <div key={key} className="col-lg-4">
          <Card className="m-3" border="info" style={{ width: "18rem" }}>
            <Card.Header>{el.title}</Card.Header>
            <Card.Body>
              <Card.Text>{el.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Details;
