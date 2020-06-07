import React,{Component} from "react";

// Компоненты css
import "./CssComponents/Dance.css"

// изображения
import Frey from './PhotoDance/MaidsOfHonor.jpg'
import Punk from './PhotoDance/Steampunk.jpg'
import Braz from './PhotoDance/Brazil.jpg'
import Lez from './PhotoDance/Lezginka.jpg'
import Gaga from './PhotoDance/Gaga.jpg'
import Burlesk from './PhotoDance/Burlesque.jpg'
import Trost from './PhotoDance/Canes.jpg'
import Amaz from './PhotoDance/Amazons.jpg'
import Sea from './PhotoDance/Sea.jpg'
import Gavai from './PhotoDance/Hawaii.jpg'
import Veera from './PhotoDance/Fans.jpg'
import Russ from './PhotoDance/Russian.jpg'
import Cigan from './PhotoDance/Gypsy.jpg'

class Dance extends Component {
    render() {
        return(
            <div>
            <div className="container">
            <div className="dbl-border">
                <div className="image-wrapper">
                    <figure className="sign">
                        <a href="https://vk.com/album-99486132_269660086"><img alt="" src={Frey}/></a>
                    <figcaption> "Фрейлины"</figcaption>
                    </figure>
                </div>
            </div>
                <div className="dbl-border">
                    <div className="image-wrapper">
                        <figure className="sign">
                            <a href="https://vk.com/album-99486132_269659996"> <img alt="" src={Punk}/></a>
                            <figcaption>"Стимпанк"</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="dbl-border">
                    <div className="image-wrapper">
                        <figure className="sign">
                            <a href="https://vk.com/album-99486132_249920445"><img alt="" src={Braz}/></a>
                            <figcaption>"Бразилия"</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
                <div className="container">
                <div className="dbl-border">
                    <div className="image-wrapper">
                        <figure className="sign">
                            <a href="https://vk.com/album-99486132_258102663"><img alt="" src={Lez}/></a>
                            <figcaption>"Лезгинка"</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="dbl-border">
                    <div className="image-wrapper">
                        <figure className="sign">
                            <a href="https://vk.com/album-99486132_249920481"><img alt="" src={Gaga}/></a>
                            <figcaption>"Леди Гага"</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="dbl-border">
                    <div className="image-wrapper">
                        <figure className="sign">
                            <a href="https://vk.com/album-99486132_250785571"><img alt="" src={Burlesk}/></a>
                            <figcaption>"Бурлеск"</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294931"><img alt="" src={Trost}/></a>
                                <figcaption>"Трости"</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294714"><img alt="" src={Amaz}/></a>
                                <figcaption>"Амазонки"</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294858"><img alt="" src={Sea}/></a>
                                <figcaption>"Море"</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294760"><img alt="" src={Gavai}/></a>
                                <figcaption>"Гаваи"</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294919"><img alt="" src={Veera}/></a>
                                <figcaption>"Веера"</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294822"><img alt="" src={Russ}/></a>
                                <figcaption>"Русский"</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="dbl-border">
                        <div className="image-wrapper">
                            <figure className="sign">
                                <a href="https://vk.com/album-99486132_247294783"><img alt="" src={Cigan}/></a>
                                <figcaption>"Цыганочка"</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dance;