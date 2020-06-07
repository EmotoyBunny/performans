import React,{Component} from "react";

//изображения
import logo from './Per1.jpg'

// Компоненты css
import "./CssComponents/Main.css"

class MainContent extends Component{
    render() {
        return(
            <div>
                <article className="slide">
                <img src={logo}  alt=""/>
                <div className="slide-content">
                    <div className="slide-item">
                        <h3>О нас</h3>
                        <p>Танцевальный коллектив, состоящий из опытных танцоров, которые действительно любят свое дело.
                            Наша новая шоу-программа станет украшением любого Вашего мероприятия - свадьбы, дня рождения,
                            корпоратива, и оставит только самые приятные воспоминания о торжестве! Яркие и интересные костюмы,
                            а также оригинальные номера не оставят равнодушным даже самого притязательного зрителя!
                            Мы будем рады сотрудничеству именно с Вами!</p>
                    </div>
                </div>
            </article>
            </div>
    );
    }
}

export default MainContent;