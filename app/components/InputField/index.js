
/***
 * 
 * Input Field
 * 
 */


import React from 'react';
import TextField from '@material-ui/core/TextField';
import Styles from './styles';

export default function ({ input, label, autoFocus, type, meta: { touched, error, warning } }) {
    const classes = Styles();
    const { id, name, value, onChange } = input;
    return (
        <div>
            <TextField className={classes.fieldColor}
                fullWidth
                name={name}
                type={type}
                label={<span className={classes.textSize} >{label}</span>}
                onChange={(e) => onChange(e.target.value)}
                value={value || ''}
                autoFocus={autoFocus} />   
                <div className={classes.error}>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>   
        </div>
       
    )
}