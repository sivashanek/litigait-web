

import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import Grid from '@material-ui/core/Grid';


export default function () {

    return (<Grid container>
        <Grid item xs={12} style={{ height: '280px' }} />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
            <ScaleLoader
                size={100}
                height={25}
                color={"#2DA01D"}
                loading={true}
            />
        </Grid>
    </Grid>)
}