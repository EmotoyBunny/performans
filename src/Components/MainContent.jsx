import React, {Component} from "react";

//изображения
import logo from './Per1.jpg'

// Компоненты jsx
import ComponentForPhoto from "./ComponentForPhoto";

// Компоненты css
import "./CssComponents/Main.css"

class MainContent extends Component {
    render() {
        return (

            <ComponentForPhoto
                item={{
                    width: 100,
                    height: 600,
                    img: logo,
                    text: "О нас",
                    name: "Танцевальный коллектив, состоящий из опытных танцоров, которые действительно любят свое дело.\n" +
                        "Наша новая шоу-программа станет украшением любого Вашего мероприятия - свадьбы, дня рождения,\n" +
                        "корпоратива, и оставит только самые приятные воспоминания о торжестве! Яркие и интересные костюмы,\n" +
                        "а также оригинальные номера не оставят равнодушным даже самого притязательного зрителя!\n" +
                        "Мы будем рады сотрудничеству именно с Вами!"
                }}/>

        );
    }
}

export default MainContent;