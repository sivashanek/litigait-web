
/***
 * 
 * Input Field
 * 
 */


import React from 'react';
import TextField from '@material-ui/core/TextField';
import Styles from './styles';

export default function ({ input, label, autoFocus, required, meta: { touched, error } }) {
    const classes = Styles();
    const { id, name, value, onChange } = input;
    return (
        <TextField className={classes.fieldColor}
            required={required}
            fullWidth
            name={name}
            label={label}
            onChange={(e) => onChange(e.target.value)}
            value={value || ''}
            autoFocus={autoFocus} />
    )
}