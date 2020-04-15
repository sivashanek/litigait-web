/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import GlobalStyle from '../../global-styles';
import { connect } from 'react-redux';

export default function App() {

  class App extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      console.log('props', this.props);
      return (
        <div>
          <h1>Welcome to App Page</h1>
          <div>
            {this.props.children}
          </div>
          <GlobalStyle />
        </div>
      ); 
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  return connect(null, mapDispatchToProps)(App);
}
