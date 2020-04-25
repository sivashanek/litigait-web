

/**
 * 
 * Edit Record Page
 * 
 */

import React from 'react';
import { connect } from 'react-redux';

export default function (name, path, columns, actions, selectors) {

    function EditRecordPage(props) {

        return (<div>
            <h1>Welcome to Edit Record Page</h1>
        </div>);

    }

    return connect()(EditRecordPage);

}