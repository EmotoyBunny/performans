import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Компоненты jsx
import ComponentForEntry from "./ComponentForEntry";


class HeadEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    /**
     * удаление userId и обновление roleId
     */
    exit = () => {
        localStorage.clear();
        this.props.update();
    };

    render() {
        if (localStorage.getItem('userId') === null || this.props.role === 3) {
            return (
                <Grid item xs={3}>
                    <Link to="/entry"><Button variant="outlined"
                                              color="inherit" size="large">Вход</Button></Link>
                </Grid>
            );
        } else {
            return (
                <div>
                    <ComponentForEntry role={this.props.role}/>
                    <Link to="/"><Button variant="contained" color="default" size="large" onClick={this.exit}>
                        Выйти
                    </Button></Link>
                </div>
            );
        }
    }
}

export default HeadEntry;
