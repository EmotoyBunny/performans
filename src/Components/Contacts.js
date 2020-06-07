import React,{Component} from "react";

// Компоненты css
import "./CssComponents/Contact.css"

class Contacts extends Component {
    render() {
        return (
            <div className="block-center">
                <dl className="holiday">
                    <dt>Наша почта</dt>
                    <dd><p>performancetgn@yandex.ru</p></dd>
                    <dt>Группа</dt>
                    <dd><a href="https://vk.com/shou_balet_performance">Вконтакте</a></dd>
                    <dt>Подписывайтесь на</dt>
                    <dd><a href="https://www.instagram.com/shou_balet_performance/">Инстаграмм</a></dd>
                    <dt>Tелефон</dt>
                    <dd><p className="phone1">+7-(904)-349-52-43</p></dd>
                    <dt>Обращайтесь так же к</dt>
                    <dd><p><a href="https://vk.com/tsenenkova">Галине</a> или <a href="https://vk.com/id14216999">Виктории</a></p></dd>
                </dl>
            </div>
        );
    }
}

export default Contacts;