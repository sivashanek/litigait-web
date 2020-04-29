
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SVG from 'react-inlinesvg';
import Typography from '@material-ui/core/Typography';

import InputField from 'Components/InputField';
import PasswordField from 'Components/PasswordField';
import CheckboxField from 'Components/CheckboxField';

import Styles from './styles';

function LoginForm({ handleSubmit }) {

    const classes = Styles();

    return (
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Field name="email" label="Email" component={InputField} type="text" required autoFocus />
                </Grid>
                <Grid item xs={12}>
                    <Field name="password" label="Password" component={PasswordField} type="text" required />
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

            <Grid className={classes.div}>
                <Grid item xs>
                    <Link to={{
                        pathname: '/',
                        state: {
                            form: 'forgot' 
                        }
                    }}  className={classes.linkColor}>
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
                    }} className={classes.linkColor}>
                        Create account
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}


export default reduxForm({
    form: 'login',
})(LoginForm);