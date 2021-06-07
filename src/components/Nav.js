import React from "react";
import {Navbar} from "react-bootstrap"

const Nav = () => {
  return (
    <div>
      <Navbar className="bg-custom justify-content-center" style={{ flex: 1}} variant="dark">
        <Navbar.Brand className="brand" href="#home">
          User List
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
