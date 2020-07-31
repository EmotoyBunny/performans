import React from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


export default function ComponentForEntry(props) {
    let text = '';
    if (props.role === 1)
        text = "Модератор";
    else if (props.role === 2)
        text = "Админ";
    return (
        <Chip
            icon={<FaceIcon/>}
            label={text}
        />
    );
}