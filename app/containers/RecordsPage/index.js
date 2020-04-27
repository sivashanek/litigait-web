/**
 * 
 * Records Page
 * 
 */



import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TableWrapper from 'components/TableWrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function (name, path, columns, actions, selectors) {
    
    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        const { dispatch, records, children, location } = props;

        useEffect(() => {
            dispatch(actions.loadRecords());
        }, []);

        return (<Grid container>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5">
            {name}
          </Typography>
          </Grid>
            <Grid item xs={12}>
                <TableWrapper
                    records={records}
                    columns={columns}
                    children={children}
                    path={path}
                    name={name}
                    locationState={location.state}
                />
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
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