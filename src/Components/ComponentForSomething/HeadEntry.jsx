import React, {Component} from "react";
import {Nav} from "react-bootstrap"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Компоненты jsx
import ComponentForEntry from "./ComponentForEntry";

class HeadEntry extends Component {
    constructor() {
        super();
        this.state = {
            role: 0,
        };
    };

    Exit = () => {
        localStorage.clear();
        this.update();
    };

    update = () => {
        if (localStorage.getItem("userId") !== null) {
            let userId = Number(localStorage.getItem('userId'));
            let login = {loginInfo: {userId: userId}};
            fetch('http://127.0.0.1:7000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(login)
            })
                .then(response => response.json())
                .then(result => {
                    this.setState({role: result.roleId});
                });
        } else {
            this.setState({role: 0})
        }
    };

    componentDidMount() {
        this.update();
    };

    render() {
        if (localStorage.getItem('userId') === null || this.state.role === 0) {
            return (
                <Grid item xs={3}>
                    <Nav.Link href="/entry"> <Button variant="outlined"
                                                     color="inherit" size="large">Вход</Button></Nav.Link>
                </Grid>
            );
        } else {
            return (
                <div>
                    <ComponentForEntry role={this.state.role}/>
                    <Button variant="contained" color="default" size="large" onClick={this.Exit}>
                        Выйти
                    </Button>
                </div>
            );
        }
    }
}

export default HeadEntry;
