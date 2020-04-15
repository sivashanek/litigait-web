/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';



class NotFoundPage extends React.Component {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    )
  }
}

export default NotFoundPage;