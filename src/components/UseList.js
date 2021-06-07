import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {data.map((el, key) => (
          <div key={key} className="col-lg-4 col-md-6">
            <User el={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
