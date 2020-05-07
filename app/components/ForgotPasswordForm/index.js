
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InputField from 'components/InputField';

import Styles from './styles';

function ForgotPasswordForm({ handleSubmit }) {

    const classes = Styles();

    return (
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Field name="email" label="Email" component={InputField} type="text" required />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit} >
                Request Reset
            </Button>

            <Grid className={classes.div}>
                <Grid item xs>
                    <Link to={{
                        pathname: '/',
                        state: {
                            register: false 
                        }
                    }} className={classes.linkColor}>
                        Back to Sign In
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}


export default reduxForm({
    form: 'forgot',
})(ForgotPasswordForm);