/**
 * 
 * Records Page
 * 
 */



import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default function (name, path, actions, selectors) {

    function RecordsPage(props) {   
        return (<div>
            <h1>Welcome to Records Page</h1>
            <ul>
                <li><Link to={`${props.match.path}/create`}>Create Page</Link></li>
                <li><Link to={`${props.match.path}/2/edit`}>Edit Page</Link></li>
                <li><Link to={`${props.match.path}/2`}>View Page</Link></li>
            </ul>
            {props.children}
        </div>)

    }

    return connect()(RecordsPage);

}