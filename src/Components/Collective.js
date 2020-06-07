import React, {Component} from "react";

// Компоненты css
import "./CssComponents/Сollective.css";


class Collective extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            delete: "",
            array: JSON.parse(localStorage.getItem('arr')) || [],
        };
    }

    // запись из input
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    // удаление элемента по имени
    delete = (event) => {
        event.preventDefault();
        const array=this.state.array;
        if(this.state.delete==="" || this.state.array.indexOf(this.state.delete) === -1){
            alert("Введите имя, которое есть в списке!");
            return;
        }
        let deleteWord = array.indexOf(this.state.delete);
        array.splice(deleteWord,1);
        this.setState({array: array});
        localStorage.clear();
        localStorage.setItem('arr', JSON.stringify(array));
    };

    // добавление элемента
    addItem = (event) => {
        event.preventDefault();
        if(this.state.user==="" || this.state.array.indexOf(this.state.user) !== -1){
            alert("Введите подобающее имя!");
            return;
        }
        const list=this.state.array;
        list.push(this.state.user);
        this.setState({array: list});
        localStorage.setItem('arr', JSON.stringify(this.state.array));
    };

    // вывод списка
    outputItem = () =>{
        const array=this.state.array;
        const listItems = array.map((items, index) =>
            <li key={index}>{items}</li>
        );
        return (<ul>{listItems}</ul>);
    };


    render() {
        return (
            <div className="block-center">
                    <div className="d10">
                      <h3>Добавить или удалить участника состава</h3>
                    </div>
                <br/>
                    <form onSubmit={this.addItem}>
                        <div>
                            <input name="user" className="form_search_input" placeholder="Имя" value={this.state.user} onChange={this.handleChange}/>
                            <button type="submit" className="form_search_button">Добавить</button>
                        </div>
                    </form>
                <br />
                    <form onSubmit={this.delete}>
                        <div>
                            <input name="delete" className="form_search_input" placeholder="Имя" value={this.state.delete} onChange={this.handleChange}/>
                            <button type="submit" className="form_search_button">Удалить</button>
                          </div>
                      </form>
                <br/>
                      <div className="d10">
                        <h3>Наш состав</h3>
                      </div>
                <br/>
                      <div className="pills">
                        {this.outputItem()}
                      </div>
            </div>
        )
    }
}


export default Collective;