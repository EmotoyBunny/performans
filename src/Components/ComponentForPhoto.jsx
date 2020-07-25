import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function ComponentForPhoto(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: props.item.width+"%",
        },
        media: {
            height: props.item.height,
        },
    });
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link href={props.item.link}>
                    <CardMedia
                        className={classes.media}
                        image={props.item.img}
                    />
                </Link>
                <CardContent style={{display: props.item.text ? "block" : "none"}}>
                    <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="h2">
                        {props.item.text}
                    </Typography>
                </CardContent>
                <CardContent style={{display: props.item.name ? "block" : "none"}}>
                    <p style={{
                        color: "#808080",
                        fontFamily: "Arial",
                        fontSize: "30px",
                        textAlign: "center"
                    }}> {props.item.name}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
