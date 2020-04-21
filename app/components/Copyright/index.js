


import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Copyright extends React.Component {
    render(){
        return (
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://litigait.com/">
                Litigait
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          );
    }
}


export default Copyright;