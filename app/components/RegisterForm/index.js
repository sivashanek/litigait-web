
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputField from 'Components/InputField';
import PasswordField from 'Components/PasswordField';
import SelectField from 'Components/SelectField';
import Error from '../Error';

import Styles from './styles';

function RegisterForm({ handleSubmit, errorMessage, clearError }) {

    const classes = Styles();

    const userOptions = [
        {
          label: 'Super Admin',
          value: 'superAdmin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ];

    return (
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Field name="name" label="Name" component={InputField} type="text" required autoFocus />
                </Grid>
                <Grid item xs={12}>
                    <Field name="email" label="Email" component={InputField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    <Field name="password" label="Password" component={PasswordField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    <Field name="confirmPassword" label="Confirm Password" component={PasswordField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    {/* <Field name="role" label="Role" component={SelectField} type="select" options={['Super Admin', 'User']} required /> */}
                    <Field name="role" label="Role" component={SelectField} type="select" options={userOptions} required />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit} >
                Register
            </Button>
            <Error errorMessage={errorMessage}/>
            <Grid className={classes.div}>
                <Typography variant="body2" className={classes.marginTopMedium}>
                    Already have an account?
                </Typography>
                <Grid item xs>
                    <Link to={{
                        pathname: '/',
                        state: {
                            form: 'login'
                        }
                    }} className={classes.linkColor} onClick = {clearError}>
                        Sign In
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}


export default reduxForm({
    form: 'register',
})(RegisterForm);