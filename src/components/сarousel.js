import React from "react";
import "./сarousel.css";
import Carousel from "react-bootstrap/Carousel";


import Smola_01 from "./../images/smola_01.jpg";
import Smola_02 from "./../images/smola_02.jpg";
import Smola_03 from "./../images/smola_03.jpg";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Smola_01}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 id='shadow'>Это красиво</h3>
            <p id='shadow'>Создавай свои уникальные шедевры и радуй друзей и близких </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Smola_02}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 id='shadow'>Это просто</h3>
            <p id='shadow'>Подробные видеоинструкции в каждой покупке</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Smola_03}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 id='shadow'>Это стильно</h3>
            <p id='shadow'> Неповторимые элементы декора теперь можно создать своими руками
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;