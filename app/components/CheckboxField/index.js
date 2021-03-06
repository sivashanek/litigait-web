
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
    const setStyles = label=='Remember Me'?classes.formControlLabel:null;
    const setFontSize = label!='Remember Me'?classes.textSize:null;

    
    return (
        <FormControlLabel className={setStyles} 
        control={<Checkbox  style={{color:"grey"}} defaultChecked={input.value || false} onChange={(e)=>input.onChange(e.target.checked)} />}
        label={<span className={setFontSize} >{label}</span>} />
    )
 }