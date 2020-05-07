/**
 * 
 * Select Field
 * 
 */

import React from 'react';
import Styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function ({ input, label, required, metaData, options, meta: { touched, error } }) {
    const classes = Styles();
    
    const { name, value } = input;
    const isPreDefinedSet = Array.isArray(options);
    return (
        <FormControl className={classes.formControl}>
            <InputLabel className={classes.labelSize} id={`${name}-id`}>{label}</InputLabel>
            <Select 
                name={name}
                fullWidth
                required={required}
                labelId={`${name}-id`}
                value={value}
                onChange={(e) => input.onChange(e.target.value)}>
                {isPreDefinedSet ? (options || []).map((opt, index) => <MenuItem key={index} value={opt && opt.value || opt}>{opt && opt.label || opt}</MenuItem>) :
                (metaData[options] || []).map((opt, index) => <MenuItem key={index} value={opt && opt.value || opt}>{opt && opt.label || opt}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

