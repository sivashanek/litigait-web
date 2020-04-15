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
} from 'containers/LoginPage/selectors';

import reducer from 'containers/LoginPage/reducer';
import saga from 'containers/LoginPage/saga';

export function RegisterPage({
  loggedIn,
  loading,
  error,
}) {
  useInjectReducer({ key: 'register', reducer });
  useInjectSaga({ key:'register', saga });


  return (
      <div>
          <h1>Welcome to Register Page</h1>
          <Link to="/">Log In</Link>
      </div>
  );
}

RegisterPage.propTypes = {
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
)(RegisterPage);
