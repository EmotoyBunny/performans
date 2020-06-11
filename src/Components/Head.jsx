import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from "react-bootstrap"

import "./CssComponents/Head.css"

// Компоненты jsx
import Contacts from "./Contacts.jsx";
import MainContent from "./MainContent.jsx";
import Dance from "./Dance.jsx";
import Collective from "./Collective.jsx";


class Head extends Component{
    render(){
        return(
            <div>
                <header className="plate">
                    <p className="script"><span>Show</span></p>
                    <p className="shadow text1">PERFORMANCE</p>
                    <p className="script"><span>Ballet</span></p>
                </header>
                <div className="container">
                    <Nav.Link href="/" className="button8">Главная</Nav.Link>
                    <Nav.Link href="/сontacts" className="button8">Контакты</Nav.Link>
                    <Nav.Link href="/dance" className="button8">Номера</Nav.Link>
                    <Nav.Link href="/collective" className="button8">Коллектив</Nav.Link>
                </div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainContent} />
                        <Route exact path="/сontacts" component={Contacts} />
                        <Route exact path="/dance" component={Dance} />
                        <Route exact path="/collective" component={Collective} />
                        <Route path="*" component={MainContent} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Head;