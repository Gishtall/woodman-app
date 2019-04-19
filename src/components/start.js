import React from "react";
import { Button } from "react-bootstrap";
import Start1 from "./../images/start1.jpg";
import { BrowserRouter} from "react-router-dom";


class Start extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <span>
                    <img src={Start1} className='start' alt="Start" />
                    <h3>Пакет "Старт"</h3>
                    <ul>
                        <li>Упаковка смолы, 300 гр</li>
                        <li>Пигментные пасты, 7 шт. (синий, зеленый, желтый, красный, белый, черный и на выбор золотой или серебряный)</li>
                        <li>Люминофор на выбор, 20 гр (синий, зеленый)</li>
                        <li>Мини-планшет для рисования</li>
                        <li>Большой планшет для рисования</li>
                        <li>Мерный стакан</li>
                        <li>Пластиковые стаканы 200 мл, 15 шт</li>
                        <li>Пластиковые стаканы 500 мл, 8 шт</li>
                        <li>Палочки для смешивания</li>
                        <li>Нитриловые перчатки</li>
                        <li>Трубочки</li>
                        <li>Малярный скотч</li>
                        <li>Упаковка салфеток</li>
                        <li>Инструкция</li>
                    </ul>
                    <Button variant="primary" href="/formentry">Заказать</Button>
                </span>
            </BrowserRouter>
        );
    }
}

export default Start;