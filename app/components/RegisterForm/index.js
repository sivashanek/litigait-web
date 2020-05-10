
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputField from 'components/InputField';
import PasswordField from 'components/PasswordField';
import SelectField from 'components/SelectField';
import Error from '../Error';

import Styles from './styles';


function RegisterForm({ handleSubmit, errorMessage, clearError }) {

    const classes = Styles();

    const userOptions = [
        {
          label: 'Lawyer',
          value: 'lawyer',
        },
        {
          label: 'Paralegal',
          value: 'paralegal',
        },
      ];

    return (
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Field name="practice_name" label="Practice Name" component={InputField} type="text" required autoFocus />
                </Grid>
                <Grid item xs={12}>
                    <Field name="name" label="Name" component={InputField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    <Field name="email" label="Email" component={InputField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    <Field name="password" label="Password" component={PasswordField} type="text" required />
                </Grid>
                <Grid item xs={12}>
                    <Field name="confirm_password" label="Confirm Password" component={PasswordField} type="text" required />
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
                <Grid item xs style={{marginBottom:'50px'}}>
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

const validate = (values) => {
    
    const errors = {}

    const requiredFields = ['practice_name','name','email','password','confirm_password','role'];

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


    if(values.password && values.confirm_password && values.confirm_password!=values.password){
        errors.confirm_password = 'Password mismatch'
    }

    return errors
  }

export default reduxForm({
    form: 'register',
    validate,
    touchOnChange: true,
})(RegisterForm);