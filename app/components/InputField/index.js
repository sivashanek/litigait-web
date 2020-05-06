
/***
 * 
 * Input Field
 * 
 */


import React from 'react';
import TextField from '@material-ui/core/TextField';
import Styles from './styles';

export default function ({ input, label, autoFocus, type, required, meta: { touched, error } }) {
    const classes = Styles();
    const { id, name, value, onChange } = input;
    console.log("type",type);
    return (
        <TextField className={classes.fieldColor}
            required={required}
            fullWidth
            name={name}
            type={type}
            label={<span className={classes.textSize} >{label}</span>}
            onChange={(e) => onChange(e.target.value)}
            value={value || ''}
            autoFocus={autoFocus} />
    )
}