import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';


// Компоненты css
import "./CssComponents/Dance.css";
import ComponentForPhoto from "./ComponentForPhoto";
import DanceArray from "./DanceArray";


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