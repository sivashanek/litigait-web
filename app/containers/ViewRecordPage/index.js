

/**
 * 
 * Vew Record Page
 * 
 */

import React from 'react';
import { connect } from 'react-redux';

export default function (name, path, columns, actions, selectors) {

    function ViewRecordPage() {

        return (<div>
            <h1>Welcome to View Record Page</h1>
        </div>);
    }

    return connect()(ViewRecordPage);

}