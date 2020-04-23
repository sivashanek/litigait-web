import React from 'react';


import GroupIcon from '@material-ui/icons/Group';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function Icons(props){
    switch(props.type){
        case 'Group':
            return <GroupIcon {...props} />
        case 'ShoppingCart':
            return <ShoppingCartIcon {...props} />
        case 'Business':
            return <BusinessCenterIcon {...props} />        
        default:
            return <DashboardIcon {...props} />     
    }
}