/**
 * 
 * Dashboard Page
 * 
 */



import React from 'react';
import { connect } from 'react-redux';

function DashboardPage() {
    return (<div>
        <h1>Welcome to Dashboard Page</h1>
    </div>)
}

export default connect()(DashboardPage);

