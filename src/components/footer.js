import React from "react";
import "./footer.css";
import { Navbar, Nav } from 'react-bootstrap';



class Footer extends React.Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" sticky="bottom" id='foot'>
        <Nav className="mr-auto">
          <Navbar.Text>
            <h6>ООО"Вудман-комп"</h6>
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            <h6>© 2019 Copyright : design by Gishtall</h6>
          </Navbar.Text>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;