import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {createBrowserHistory} from "history";

// Компонент jsx
import "./CssComponents/Head.css"

// Компоненты jsx
import Contacts from "./Contacts.jsx";
import MainContent from "./MainContent.jsx";
import Dance from "./Dance.jsx";
import Collective from "./Collective.jsx";
import Entry from "./ComponentForSomething/Entry.jsx";
import HeadEntry from "./ComponentForSomething/HeadEntry";


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 3,
            root: {
                height: 55,
                padding: '0 50px',
                fontSize: "25px",
                margin: "20px",
            },
        };
    };

    /**
     * Обновление roleId
     */
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
            this.setState({role: 3});
        }
    };

    componentDidMount() {
        this.update();
    }

    render() {
        const customHistory = createBrowserHistory();
        return (
            <Router history={customHistory}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <div className="three"><h1>Performance</h1></div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="container1">
                            <HeadEntry role={this.state.role} update={this.update}/>
                        </div>
                    </Grid>
                </Grid>
                <div className="container">
                    <Link to="/"><Button style={this.state.root} variant="outlined" color="inherit"
                                         size="large">Главная</Button></Link>
                    <Link to="/сontacts"> <Button style={this.state.root} variant="outlined"
                                                  color="inherit" size="large">Контакты</Button></Link>
                    <Link to="/dance"> <Button style={this.state.root} variant="outlined"
                                               color="inherit" size="large">Номера</Button></Link>
                    <Link to="/collective"> <Button style={this.state.root} variant="outlined"
                                                    color="inherit" size="large">Коллектив</Button></Link>
                </div>
                <Switch>
                    <Route exact path="/" component={MainContent}/>
                    <Route exact path="/сontacts" component={Contacts}/>
                    <Route exact path="/dance" component={Dance}/>
                    <Route exact path="/collective"
                           render={(props) => <Collective {...props} role={this.state.role}/>}/>
                    <Route exact path="/entry" render={(props) => <Entry {...props} update={this.update}/>}/>
                    <Route path="*" component={MainContent}/>
                </Switch>
            </Router>
        );
    }
}

export default Head;