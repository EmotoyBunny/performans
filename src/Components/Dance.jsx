import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';


// Компоненты css
import "./CssComponents/Dance.css";

//Компоненты jsx
import ComponentForPhoto from "./ComponentForSomething/ComponentForPhoto";
import DanceArray from "./ComponentForSomething/DanceArray";

class Dance extends Component {
    render() {
        const Array = DanceArray.map(item =>
            <Grid key={item.id} xs={4} item>
                <ComponentForPhoto key={item.id} item={item}/>
            </Grid>
        );
        return (
            <Grid container spacing={3}>
                {Array}
            </Grid>
        );
    }
}

export default Dance;