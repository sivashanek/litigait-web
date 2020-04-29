import React from 'react';
import Alert from '@material-ui/lab/Alert';

const errorMessage = (props) =>{
    return (
        <div>
            {props.errorMessage != null ? <Alert severity="error" variant="filled">{props.errorMessage}</Alert> : null}
        </div>

     );
}

export default errorMessage;