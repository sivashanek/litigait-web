/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoggedIn,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import { logIn } from './actions'; 

export function LoginPage({
  loggedIn,
  loading,
  error,
  dispatch
}) {
  useInjectReducer({ key: 'session', reducer });
  useInjectSaga({ key:'session', saga });

   console.log('loggedIn', loggedIn); 
  return (
      <div>
          <h1>Welcome to Login Page</h1>
          <Link to="/register">SignUp</Link>
          {!loggedIn ? <button onClick={()=>dispatch(logIn())}>Login Here..</button> :
          <button onClick={()=>alert()}>Logout</button> }
      </div>
  );
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
