
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SVG from 'react-inlinesvg';
import Typography from '@material-ui/core/Typography';
import Error from '../Error';

import InputField from 'components/InputField';
import PasswordField from 'components/PasswordField';
import CheckboxField from 'components/CheckboxField';

import Styles from './styles';

function LoginForm({ handleSubmit, errorMessage, clearError }) {

    const classes = Styles();

    return (
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Field name="email" label="Email" component={InputField} type="text" required autoFocus />
                </Grid>
                <Grid item xs={12}>
                    <Field name="password" label="Password" component={PasswordField} type="text"  />
                </Grid>
            </Grid>
            <Field name="remember" label="Remember Me" component={CheckboxField} type="checkbox" />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit} >
                <SVG src={require('images/login/lock.svg')} className={classes.lockIcon} />
                Sign In
            </Button>
            <Error errorMessage={errorMessage}/>
            <Grid className={classes.div}>
                <Grid item xs>
                    <Link 
                    // to={{
                    //     pathname: '/',
                    //     state: {
                    //         form: 'forgot'
                    //     }
                    // }} 
                    className={classes.linkColor}>
                        Forgot your Password?
                    </Link>
                </Grid>
                <Typography variant="body2" className={classes.marginTopMedium}>
                    New to D&J Law Firm
                </Typography>
                <Grid item xs>
                    <Link to={{
                        pathname: '/',
                        state: {
                            form: 'register'
                        }
                    }} className={classes.linkColor} onClick = {clearError}
                    >
                        Create account
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}


const validate = (values) => {
    
    const errors = {}

    const requiredFields = ['email','password'];

    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    if(values.password && values.password.length<4){
        errors.password = 'Password must be atleast 4 characters'
    }

    return errors
  }


export default reduxForm({
    form: 'login',
    validate,
    touchOnChange: true,
})(LoginForm);