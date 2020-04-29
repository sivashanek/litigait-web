
/**
 * 
 * Checkbox Field
 * 
 */

 import React from 'react';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Checkbox from '@material-ui/core/Checkbox';
import Styles from './styles';

 export default function ({ input, label, required, meta: { touched, error } }) {

    const classes = Styles();
    
    return (
        <FormControlLabel className={classes.formControlLabel}
        control={<Checkbox  style={{color:"grey"}} defaultChecked={input.value || false} onChange={(e)=>input.onChange(e.target.checked)} />}
        label={label} />
    )
 }