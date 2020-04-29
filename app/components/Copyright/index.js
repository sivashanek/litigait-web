


import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Copyright extends React.Component {
    render(){
        return (
            <Typography variant="body2" align="center">
              {'© '}  {new Date().getFullYear()} 
             {' D&J Law Firm. All rights Reserved'}
             
              {'.'}
            </Typography>
          );
    }
}


export default Copyright;