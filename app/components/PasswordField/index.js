/**
 * 
 * Password Field
 * 
 */

import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Styles from './styles';

export default function ({ input, label, required, meta: { touched, error } }) {
    const classes = Styles();
    const [showPassword, setshowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <FormControl className={classes.fieldColor}>
            <InputLabel required>{<span className={classes.textSize} >{label}</span>}</InputLabel>
            <Input
                required={required}
                type={showPassword ? 'text' : 'password'}
                defaultValue={input.value || ''}
                onChange={(e) => input.onChange(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )

}