

/**
 * 
 * Vew Record Page
 * 
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Styles from './styles';



export default function (name, path, columns, actions, selectors) {


    const { selectRecord } = selectors;
    function ViewRecordPage({ record, dispatch }) {
        const classes = Styles();

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container style={{justifyContent:'space-between',marginBottom:'12px'}}>
                        <Link to={path} className={classes.link}>Close</Link>
                        <Grid style={{display:'flex',alignItems:'center'}}>
                            <Link to={`${path}/${record.id}/edit`} className={classes.link}>Edit</Link>
                            <Button
                                type="button"
                                variant="contained"
                                className={classes.Button}
                                onClick={()=>dispatch(actions.deleteRecord(record.id))} >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {(columns || []).map((column) =>
                                (column.viewRecord ?
                                    <Grid item xs={12} key={column.id}>
                                        <div>
                                            <div className={classes.label}>{column.label}:</div>
                                            {record[column.value] || '-'}
                                            <hr/>
                                        </div>
                                    </Grid>
                                    : null))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>);
    }

    ViewRecordPage.propTypes = {
        record: PropTypes.object,
    };

    const mapStateToProps = createStructuredSelector({
        record: (state, props) => selectRecord(props.match.params.id)(state)
    });

    const withConnect = connect(
        mapStateToProps,
    );


    return compose(
        withConnect,
        memo
    )(ViewRecordPage);

}