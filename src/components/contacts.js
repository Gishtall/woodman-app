import React, { Component } from "react";
import './contacts.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Info } from 'styled-icons/fa-solid/Info';
import { Phone } from 'styled-icons/boxicons-regular/Phone';
import { Mail } from 'styled-icons/feather/Mail';


class ContInfo extends React.Component {
    render() {
        return (
            <Container-fluid id="contact">
                <Row>
                    <Col>
                        <Info size={25} title='УНП' />
                        <h4>ООО"Вудман-комп"</h4>
                        <p>РЕГИСТРАЦИЯ</p>
                        <p>УНП:1987655243</p>
                        <p>МНС: 20.11.2018</p>
                        <p>Юр.адрес: г.Минск ул.Огинского д.6 пом.112 индекс: 220033</p>
                        <Phone size={25} title='телефон'/>
                        <h4>+375(25)123-45-67</h4>
                        <h4>+375(33)123-45-67</h4>
                        <h4>+375(44)123-45-67</h4>
                        <Mail size={25} title='Почта' />
                        <h4>Woodcomp@Gmail.com</h4>                       
                    </Col>
                </Row>
            </Container-fluid>
            
        );
    }
}

export default ContInfo;