import React from 'react';
import "./header.css";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Calendar } from 'styled-icons/boxicons-regular/Calendar';
import { PhoneCall } from 'styled-icons/feather/PhoneCall';
import woodmanLogo from "./../images/woodman_logo.png";


class Head extends React.Component {
  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src={woodmanLogo} className='logo' alt="Woodman" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Домой</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
            <NavDropdown title="Заказать" id="basic-nav-dropdown">
              <NavDropdown.Item href="/startpac">Пакет "Старт"</NavDropdown.Item>
              <NavDropdown.Item href="/standardpac">Пакет "Стандарт"</NavDropdown.Item>
              <NavDropdown.Item href="/premiumpac">Пакет "Премиум"</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Calendar size={25} title='Calendar'/>Пн-Пт с 9:00 до 18:00</Nav.Link>
            <Nav.Link><PhoneCall size={25} title='Phone'/>+375(29)123-45-67</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Head;
