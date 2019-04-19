import React from "react";
import "./footer.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Vk } from 'styled-icons/fa-brands/Vk';
import { Facebook } from 'styled-icons/fa-brands/Facebook';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { Youtube } from 'styled-icons/fa-brands/Youtube';
import { GooglePlus } from 'styled-icons/fa-brands/GooglePlus';
import { Instagram } from 'styled-icons/fa-brands/Instagram';


class Footer extends React.Component {
  render() {
    return (
        <Container-fluid id="foot" sticky="bottom">
          <Row>
            <Col>
             <Vk size={30} title='Vk'/> 
             <Facebook size={30} title='Facebook'/>
             <Twitter size={30} title='Twitter'/>
             <Youtube size={30} title='Youtube'/>
             <GooglePlus size={30} title='Google+'/>
             <Instagram size={30} title='Instagram'/>
            </Col>
          </Row>
          <Row>
            <Col>
             <h6>© 2019 Copyright : design by Gishtall</h6>
            </Col>
          </Row >
        </Container-fluid >
    );
  }
}

export default Footer;