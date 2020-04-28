/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles'

import { selectLoggedIn, selectUser, selectError } from 'blocks/session/selectors';
import { logIn } from 'blocks/session/actions';
import Copyright from 'components/Copyright';
import theme from '../../theme';
import lockIcon from '../../images/login/lock.svg';
import SVG from 'react-inlinesvg';
import Alert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline-227:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2ca01c',
    textTransform: 'none',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#2ca01c',
    }
  },
  marginLeftMedium: {
    marginLeft: theme.spacing(0.5),
    fontFamily: 'Avenir-Bold'
  },

  formControlLabel: {
    marginTop: theme.spacing(2),
  },

  marginTopMedium: {
    marginTop: theme.spacing(4),
  },

  div: {
    textAlign: 'center',
    marginTop: theme.spacing(1.3),
  },

  copyRight: {
    position: 'relative',
  },

  copyRightBottom: {
    bottom: '-50px',
    position: 'relative',
  },

  lockIcon: {
    width: '20px',
    height: '20px',
    marginRight: '4px',
  },

  linkColor: {
    color: '#0077c5',
  },

  remember: {
    marginTop: theme.spacing(1),
  },

  fieldColor: {
    '& :after': {
      borderBottomColor: '#2ca01c',
    },
    '& :before': {
      borderBottomColor: '#2ca01c',
    },
    color: 'green !important',
    '& label.Mui-focused': {
      color: '#2ca01c',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2ca01c',
    },
  },

}));

export function LoginPage(props) {

  const { loggedIn, user, error, dispatch } = props;

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const classes = useStyles();

  let err = null;

  //    const onChangeHandler = (event,type) => {
  //            if(type=='email'){
  //                updatedValue.email = event.target.value
  //            }else{
  //                updatedValue.password = event.target.value
  //            }
  //    }

    if(error && error.login && error.login.response
      && error.login.response.data && error.login.response.data.error){
        const data = error.login.response.data;
        console.log("err ", data);
        // console.log("object ", data["error"]);
        // console.log("object length", Object.keys(data.error)[0]);
        err = data['error'][Object.keys(data.error)[0]][0];
        console.log("err ", err);
        // {Object.keys(err).map((item, i) => {
        //   console.log("i value ", item[i]);
        // })}

        // Object.keys(err).map((key, i) => (
        //   console.log("i value ", err.object[key]))

        // )


        // console.log("err object",[Object.keys(err)[0]][]);
      }



  // console.log("test ", test.error[0]);

  const onChangeHandler = (event, type) => {
    if (type == 'email') {
      setValues.email = event.target.value;
    } else {
      setValues.password = event.target.value;
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop == 'email') {
      setValues.email = event.target.value;
    } else {
      setValues.password = event.target.value;
    }
  };

  return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={8} className={classes.image} />
        <Grid style={{ backgroundColor: '#eceef1' }} item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Grid container direction="row"
              justify="center"
              alignItems="center">
              {/* <Avatar className={classes.avatar} src="/static/images/avatar/1.jpg">
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5" className={classes.marginLeftMedium}>
                D & J Law Firm</Typography>
            </Grid>
            <form className={classes.form} noValidate >
              <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                  <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input id="name" type="text"/>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12}>
                  <TextField className={classes.fieldColor}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) => onChangeHandler(event, "email")}
                    autoFocus />
                </Grid>
                <Grid item xs={12}>
                  <FormControl style={{ width: '100%' }} className={classes.fieldColor}>
                    <InputLabel required>Password</InputLabel>
                    <Input
                      required
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <FormControlLabel className={classes.formControlLabel}
                control={<Checkbox value="remember" color="#ffffff" />}
                label="Remember Me" />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => dispatch(logIn(setValues.email, setValues.password))} >
                <SVG src={require('images/login/lock.svg')} className={classes.lockIcon} />Sign In
                        </Button>

              {err!=null?<Alert severity="error" variant="filled">{err}</Alert>:null}

              <div className={classes.div}>
                <Grid item xs>
                  <Link href="#" variant="body2" className={classes.linkColor}>
                    Forgot your Password?
                                </Link>
                </Grid>
                <Typography variant="body2" className={classes.marginTopMedium}>
                  New to D&J Law Firm</Typography>
                <Grid item xs>
                  <Link href="#" variant="body2" className={classes.linkColor}>
                    {"Create account"}
                  </Link>
                </Grid>
              </div>


            </form>
          </div>
          <div className={err!=null?classes.copyRight:classes.copyRightBottom} >

            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
  );
}

LoginPage.propTypes = {
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
)(LoginPage);
