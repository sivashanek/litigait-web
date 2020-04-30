/**
 * 
 * Records Page
 * 
 */



import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TableWrapper from 'components/TableWrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Styles from './styles';

export default function (name, path, columns, actions, selectors) {

    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        const classes = Styles();
        const { dispatch, records, children, location } = props;

        useEffect(() => {
            dispatch(actions.loadRecords());
        }, []);

        const activeChildren = path !== location.pathname;
        
        return (<Grid container>
            <Grid item xs={12} className={classes.header}>
                <Typography component="h1" variant="h5">
                    {name}
                </Typography>
                <Link to={`${path}/create`}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.create} >
                        New {name}
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={activeChildren ? 6 : 12} className={classes.table}>
                <TableWrapper
                    records={records}
                    columns={columns}
                    children={activeChildren}
                    path={path}
                    name={name}
                    locationState={location.state}
                />
            </Grid>
            {activeChildren ?
                <Grid item xs={6}>
                    <Grid container className={classes.children}>
                        {children}
                    </Grid>
                </Grid> : null}
        </Grid>)
    }

    RecordsPage.propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        records: PropTypes.array,
    };

    const mapStateToProps = createStructuredSelector({
        loading: selectLoading(),
        records: selectRecords(),
        error: selectError(),
    });

    function mapDispatchToProps(dispatch) {
        return {
            dispatch
        };
    }

    const withConnect = connect(
        mapStateToProps,
        mapDispatchToProps,
    );


    return compose(
        withConnect,
        memo
    )(RecordsPage);

}