/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { selectLoggedIn, selectUser, selectError } from 'blocks/session/selectors';
import { logIn, signUp, sessionResetError} from 'blocks/session/actions';
import Copyright from 'components/Copyright';
import useStyles from './styles';

import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import ForgotPasswordForm from 'components/ForgotPasswordForm';


const ImplementationFor = {
  login: LoginForm,
  register: RegisterForm,
  forgot: ForgotPasswordForm
};

export function HomePage(props) {
  const { loggedIn, user, error, location, dispatch } = props;

  const classes = useStyles();

  let err = null;

  if (error && error.login && error.login.response
    && error.login.response.data && error.login.response.data.error) {
    const data = error.login.response.data;
    err = data['error'][Object.keys(data.error)[0]][0];
  }


  const formState = location && location.state && location.state.form || 'login';
  const Component = formState && ImplementationFor[formState]

  const handleSubmit = (data, dispatch, { form }) => {
    if (formState === 'login') {
      dispatch(logIn(data.email, data.password, data.remember))
    } else if (formState === 'register') {
      dispatch(signUp(data, form))
    }
  }
  const clearError = () => {
    dispatch(sessionResetError());
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={8} className={classes.image} />
      <Grid style={{ backgroundColor: '#eceef1' }} item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid container direction="row"
            justify="center"
            alignItems="center">
            <Typography component="h1" variant="h5" className={classes.marginLeftMedium}>
              D & J Law Firm</Typography>
          </Grid>
          {<Component onSubmit={handleSubmit.bind(this)} errorMessage={err} clearError={clearError}/>}
        </div>
        <div >
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

HomePage.propTypes = {
  user: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  user: selectUser(),
  error: selectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
