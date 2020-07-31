import React, {Component} from "react";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// Компоненты css
import "./CssComponents/Сollective.css";


class Collective extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            array: [],
            role: 0,
        };
        this.url = 'http://localhost:7000/api/dancers';
    }

    /**
     * запись из поля ввода
     * @param event
     */
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    /**
     * добавление элемента
     *
     */
    addItem = () => {
        let id = this.state.user;
        let dancer = {dancer: {id: id, name: id}};
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dancer)
        })
            .then(response => response.json())
            .then(() => this.updateList());
    };

    /**
     * удаление элемента
     * @param del - индекс элемента
     */
    delete = (del) => {
        fetch('http://localhost:7000/api/dancers?id=' + del, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => this.updateList());
    };

    /**
     * Обновление массива с танцорами
     *
     */
    updateList = () => {
        fetch(this.url)
            .then(response => {
                return response.json();
            })
            .then(dancer => {
                this.setState({array: dancer.data})
            })
            .then(() => this.update());
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
            this.setState({role: 0});
        }
    };

    componentDidMount() {
        this.updateList();
    }


    /**
     * вывод списка
     * @returns {*} - список
     */
    outputItem = () => {
        const array = this.state.array;
        if (this.state.role === 0) {
            const listItems = array.map((items, index) =>
                <ListItem key={index} button className="list">
                    <ListItemText id={index} primary={items.name}/>
                </ListItem>
            );
            return (<List>{listItems}</List>);
        } else if (this.state.role === 1 || this.state.role === 2) {
            const listItems = array.map((items, index) =>
                <ListItem key={index} button className="list">
                    <ListItemText id={index} primary={items.name}/>
                    <IconButton aria-label="delete" color="inherit" onClick={() => this.delete(items.name)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItem>
            );
            return (<List>{listItems}</List>);
        }
    };

    render() {
        if (this.state.role === 2) {
            return (
                <div className="block-center">
                    <div className="d10">
                        <h3>Добавить участника состава</h3>
                    </div>
                    <br/>
                    <div className="focus">
                        <TextField name="user" color='secondary' id="outlined-basic" label='Имя' variant="filled"
                                   value={this.state.user} onChange={this.handleChange}/>
                        <Button variant="contained" color="default" size="large" onClick={this.addItem}>
                            Добавить
                        </Button>
                    </div>
                    <br/>
                    <div className="d10">
                        <h3>Наш состав</h3>
                    </div>
                    <br/>
                    <div>
                        {this.outputItem()}
                    </div>
                </div>
            );
        }
        return (
            <div className="block-center">
                {this.outputItem()}
            </div>
        );
    }
}


export default Collective;