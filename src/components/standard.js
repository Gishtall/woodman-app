import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Standard1 from "./../images/standard1.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Standard extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <span>
                    <img src={Standard1} className='standard' alt="Standard" />
                    <h3>Пакет "Стандарт"</h3>
                    <ul>
                        <li>-Упаковка смолы 1 кг</li>
                        <li>-8 пигментных паст (синий, зеленый, желтый, красный, белый, черный, золото, серебро)</li>
                        <li>-Набор красителей, 6 шт (синий, зеленый, красный, оранжевый, черный, белый)</li>
                        <li>-Люминофор 40 гр (синий, зеленый)</li>
                        <li>-3 планшета для рисования</li>
                        <li>-Мерный стакан</li>
                        <li>-Пластиковые стаканы 200 мл (15 шт)</li>
                        <li>-Пластиковые стаканы 500 мл (8 шт)</li>
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

export default Standard;