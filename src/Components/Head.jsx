import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import { createBrowserHistory } from "history";

// Компонент jsx
import "./CssComponents/Head.css"

// Компоненты jsx
import Contacts from "./Contacts.jsx";
import MainContent from "./MainContent.jsx";
import Dance from "./Dance.jsx";
import Collective from "./Collective.jsx";
import Entry from "./ComponentForSomething/Entry.jsx";
import HeadEntry from "./ComponentForSomething/HeadEntry";

const useStyles = makeStyles({
    root: {
        height: 55,
        padding: '0 50px',
        fontSize: "25px",
        margin: "20px",
    },
});

export default function Head() {
    const classes = useStyles();
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
                        <HeadEntry/>
                    </div>
                </Grid>
            </Grid>
            <div className="container">
                <Link to="/"><Button classes={{root: classes.root}} variant="outlined" color="inherit"
                                     size="large">Главная</Button></Link>
                <Link to="/сontacts"> <Button classes={{root: classes.root}} variant="outlined"
                                              color="inherit" size="large">Контакты</Button></Link>
                <Link to="/dance"> <Button classes={{root: classes.root}} variant="outlined"
                                           color="inherit" size="large">Номера</Button></Link>
                <Link to="/collective"> <Button classes={{root: classes.root}} variant="outlined"
                                                color="inherit" size="large">Коллектив</Button></Link>

            </div>
            <Switch>
                <Route exact path="/" component={MainContent}/>
                <Route exact path="/сontacts" component={Contacts}/>
                <Route exact path="/dance" component={Dance}/>
                <Route exact path="/collective" component={Collective}/>
                <Route exact path="/entry" component={Entry}/>
                <Route path="*" component={MainContent}/>
            </Switch>
        </Router>
    );
}

