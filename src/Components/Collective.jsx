import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// Компоненты css
import "./CssComponents/Сollective.css";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

class Collective extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            delete: "",
            array: JSON.parse(localStorage.getItem('arr')) || [],
        };
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
     * @param event
     */
    addItem = (event) => {
        event.preventDefault();
        if (this.state.user === "" || this.state.array.indexOf(this.state.user) !== -1) {
            alert("Введите подобающее имя!");
            return;
        }
        const list = this.state.array;
        list.push(this.state.user);
        this.setState({array: list});
        localStorage.setItem('arr', JSON.stringify(this.state.array));
    };

    /**
     * удаление элемента
     * @param del - индекс элемента
     */
    delete = (del) => {
        const array = this.state.array;
        array.splice(del, 1);
        this.setState({array: array});
        localStorage.clear();
        localStorage.setItem('arr', JSON.stringify(array));
    };

    /**
     * вывод списка
     * @returns {*} - список
     */
    outputItem = () => {
        const array = this.state.array;
        const listItems = array.map((items, index) =>
            <ListItem key={index} button className="list">
                <ListItemText id={index} primary={items}/>
                <IconButton aria-label="delete" color="inherit">
                    <DeleteIcon onClick={() => this.delete(index)}/>
                </IconButton>
            </ListItem>
        );
        return (<list>{listItems}</list>);
    };

    render() {
        return (
            <div className="block-center">
                <div className="d10">
                    <h3>Добавить или удалить участника состава</h3>
                </div>
                <br/>
                <form onSubmit={this.addItem}>
                    <div className="focus">
                        <form className={useStyles.root} noValidate autoComplete="off">
                            <TextField name="user" color='secondary' id="outlined-basic" label='Имя' variant="filled"
                                       value={this.state.user} onChange={this.handleChange}/>
                            <Button variant="contained" color="default" size="large" type="submit">
                                Добавить
                            </Button>
                        </form>
                    </div>
                </form>
                <br/>
                <div className="d10">
                    <h3>Наш состав</h3>
                </div>
                <br/>
                <div>
                    {this.outputItem()}
                </div>
            </div>
        )
    }
}


export default Collective;