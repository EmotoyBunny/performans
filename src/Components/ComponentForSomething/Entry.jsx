import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Компоненты css
import "./Css/Entry.css"

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
                    const error = "Неправильно введен логин или пароль";
                    main = false;
                    return alert(error);
                }
                return response.json();
            })
            .then(result => {
                if (main === true) {
                    localStorage.setItem('userId', JSON.stringify(result.userId));
                    window.location.assign('http://localhost:3000');
                }
            });
    };


    render() {
        return (
            <div className="focus">
                <Grid container spacing={3}>
                    <Grid item xs={12} justify="center">
                        <TextField name="login" color='secondary' id="outlined-basic" label='Логин' variant="filled"
                                   value={this.state.login} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" color='secondary' id="outlined-basic" label='Пароль' variant="filled"
                                   value={this.state.password} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="default" size="large" onClick={this.entry}>
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </div>);
    };
}

export default Entry;