/**
 * 
 * Dashboard Page
 * 
 */



import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Welcome to Dashboard Page</h1>
            <ul>
                <li><Link to="/cases">Cases</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </div>)
    }
}

export default connect()(DashboardPage);

