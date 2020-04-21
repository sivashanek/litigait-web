
/**
 * 
 * Create Record Page
 * 
 */


import React from 'react';
import { connect } from 'react-redux';

export default function (name, path, actions, selectors){

    class CreateRecordPage extends React.Component {
        constructor(props){
            super(props);
        }

        render() {
            return (<div>
                <h1>Welcome to Create Record Page</h1>
            </div>)
        }
    }

    return connect()(CreateRecordPage);

}