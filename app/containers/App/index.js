/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectLoggedIn, selectUser, selectError } from 'blocks/session/selectors';
import GlobalStyle from '../../global-styles';

function App(props) {
  const { loggedIn } = props;
  return (
    <div>
      {loggedIn ? <div>
        <ul>
          <li><Link to="/cases">Cases</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </div> : null}
      <div>
        {props.children}
      </div>
      <GlobalStyle />
    </div>
  );
}


App.propTypes = {
  user: PropTypes.object,
  loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  error: selectError(),
});


const withConnect = connect(
  mapStateToProps
);

export default compose(
  withConnect,
  memo,
)(App);
