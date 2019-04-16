import React from "react";
import Form from 'react-bootstrap/Form';
import "./form.css";
import Modal from 'react-bootstrap/Modal';
import Cards from "./../images/cards.jpg";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


class FormEntry extends React.Component {
    constructor(...args) {
        super(...args);


        this.state = { validated: false };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }

    handleShow(){
        this.setState({ show: true })
        console.log()      
    }

    handleSubmit = (event) => {
        this.setState({ validated: true });

        const form = event.currentTarget;
        if (form.checkValidity()=== false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        else {
            this.handleShow();
            console.log(form.checkValidity()) 
        }
    }
                    


    
    handleClose() {
        this.setState({ show: false });
    }
    
     

    render() {
        const { validated } = this.state;
        return (
            <div>
                <img src={Cards} className='cards' alt="Cards" />
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Иван"
                            />
                            <Form.Control.Feedback>Это Ваше имя?!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Иванов"
                            />
                            <Form.Control.Feedback>Это Ваша фамилия?!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                            <Form.Label> Электронная почта</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@mail</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username@Mail.com"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Пожалуйста, введите адрес электронной почты.
              </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Город</Form.Label>
                            <Form.Control type="text" placeholder="Минск" required />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите ваш город.
            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Адрес</Form.Label>
                            <Form.Control type="text" placeholder="Улица, Дом, Квартира." required />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите ваш адрес.
            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Почтовый индекс</Form.Label>
                            <Form.Control type="text" placeholder="220033" required />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите ваш почтовый индекс.
            </Form.Control.Feedback>
                        </Form.Group >
                        <Form.Group as={Col} md="4" controlId="validationCustomUserPhone">
                            <Form.Label>Контактный телефон</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">+375</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="введите номер"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    введите ваш номер телефона.
              </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="form.ControlSelect1">
                            <Form.Label>Выберите пакет</Form.Label>
                            <Form.Control as="select">
                                <option>Пакет "Старт"</option>
                                <option>Пакет "Стандарт"</option>
                                <option>Пакет "Премиум"</option>
                                <option>Другое (в комментарии к заказу)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="form.ControlSelect2">
                            <Form.Label>Доставка</Form.Label>
                            <Form.Control as="select">
                                <option>Самовывоз</option>
                                <option>Доставка курьером</option>
                                <option>Доставка почтой</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="form.ControlSelect3">
                            <Form.Label>Оплата</Form.Label>
                            <Form.Control as="select">
                                <option>Наличные</option>
                                <option>Карта</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="8" controlId="form.ControlTextarea4">
                            <Form.Label>Комментарии к заказу</Form.Label>
                            <Form.Control as="textarea" rows="2" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check
                            required
                            label="Я согласен с условиями"
                            feedback="Вы должны согласиться с условиями"
                        />
                    </Form.Group>
                    <Button type="submit">Оформить заказ</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заказ оформлен</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Наши операторы свяжуться с вами в ближайшее время.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Закрыть
                    </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
                
            </div>
        );
    }
}
export default FormEntry;