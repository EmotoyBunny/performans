import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Компоненты css
import "./Css/Entry.css"

import HeadEntry from "./HeadEntry";

class Entry extends Component {
    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
        };
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };


    entry = () => {
        if (this.state.login === "" || this.state.password === "") {
            return alert("Введите логин или пароль!")
        }
        let login = {loginInfo: {login: this.state.login, password: this.state.password}};
        let main = true;
        fetch('http://127.0.0.1:7000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(login)
        })
            .then(response => {
                if (!response.ok) {
                    const error = "Неправильно введен логин или пароль!";
                    main = false;
                    return alert(error);
                }
                return response.json();
            })
            .then(result => {
                if (main) {
                    localStorage.setItem('userId', JSON.stringify(result.userId));
                    this.props.history.push('/');
                }
            });
    };

    render() {
        return (
            <div>
                <div className="focus">
                    <TextField name="login" color='secondary' label='Логин' variant="filled"
                               value={this.state.login} onChange={this.handleChange}/>
                </div>
                <div className="focus">
                    <TextField name="password" color='secondary' label='Пароль' variant="filled"
                               value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="focus">
                    <Button variant="contained" color="default" size="large" onClick={() => this.entry()}>
                        Войти
                    </Button>
                </div>
            </div>
        );
    };
}

export default Entry;