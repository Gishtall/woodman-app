import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Premium1 from "./../images/premium1.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Premium extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <span>
                <img src={Premium1} className='premium' alt="Premium" />
                <h3>Пакет "Премиум"</h3>
                <ul>
                    <li>-Упаковка смолы 2 кг</li>
                    <li>-8 пигментных паст (синий, зеленый, желтый, красный, белый, черный, золото, серебро)</li>
                    <li>-Набор красителей, 6 шт (синий, зеленый, красный, оранжевый, черный, белый)</li>
                    <li>-Люминофор 80 гр (синий, зеленый)</li>
                    <li>-3 планшета для рисования</li>
                    <li>-3 хвойные шишки</li>
                    <li>-2 формы для заливки</li>
                    <li>-Мерный стакан</li>
                    <li>-Пластиковые стаканы 200 мл (20 шт)</li>
                    <li>-Пластиковые стаканы 500 мл (10 шт)</li>
                    <li>-Палочки для смешивания</li>
                    <li>-Нитриловые перчатки</li>
                    <li>-Трубочки</li>
                    <li>-Малярный скотч</li>
                    <li>-Упаковка салфеток</li>
                    <li>-Инструкция</li>  
                </ul>
                <Button variant="primary" href="/formentry">Заказать</Button>
            </span>
            </BrowserRouter>
        );
    }
}

export default Premium;