import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import PeopleIcon from '@material-ui/icons/People';


// Компоненты css
import "./CssComponents/Contact.css"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        color: 'black',
        backgroundColor: theme.palette.background.paper,
        margin: "auto",
    },
}));

export default function Contacts() {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EmailIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Наша почта" secondary="performancetgn@yandex.ru"/>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PeopleIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Группа" secondary={<a className="link"
                                                             href="https://vk.com/shou_balet_performance">Вконтакте</a>}/>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar><InstagramIcon/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Подписывайтесь на" secondary={<a className="link"
                                                                        href="https://www.instagram.com/shou_balet_performance/">Инстаграмм</a>}/>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar><PhoneIcon/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tелефон" secondary="+7-(904)-349-52-43"/>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar><PersonAddIcon/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Обращайтесь так же к"
                              secondary={<p><a className="link" href="https://vk.com/tsenenkova">Галине</a> или <a
                                  className="link" href="https://vk.com/id14216999">Виктории</a></p>}/>
            </ListItem>
        </List>

    );
}
