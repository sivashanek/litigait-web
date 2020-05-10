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

export default function ({ input, label, required, meta: { touched, error, warning } }) {
    const classes = Styles();
    const [showPassword, setshowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <FormControl className={classes.fieldColor}>
                <InputLabel >{<span className={classes.textSize} >{label}</span>}</InputLabel>
                <Input
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
            <div className={classes.error}>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
        </div>
    )

}