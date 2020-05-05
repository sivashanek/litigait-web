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
import SVG from 'react-inlinesvg';

export default function (name, path, columns, actions, selectors, filterColumns, show, disableClickList) {

    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        const classes = Styles();
        const { dispatch, records, children, location, history } = props;

        const [filter, setFilter] = useState(false);

        useEffect(() => {
            dispatch(actions.loadRecords());
        }, []);

        const activeChildren = path !== location.pathname;
       
       return (<Grid container>
            <Grid item xs={12}>
                <Grid container justify="space-between">
                    <Typography component="h1" variant="h5">
                        {name}
                    </Typography>
                    {show ? <Link to={`${path}/create`}>
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            className={classes.create} >
                            New {name}
                        </Button>
                    </Link> : null}
                </Grid>
            </Grid>
            {filterColumns && filterColumns[name] && show ? <Grid item xs={12}>
                <SVG src={require('images/icons/dropdown.svg')} className={classes.dropdown} />
                <select className={classes.filter} defaultValue={""} onChange={(e) => setFilter(e.target.value)}>
                    {filterColumns[name].options.map((a, i) => <option key={i} disabled={a.disabled} value={a.value}>{a.label}</option>)}
                </select>
            </Grid> : null}
            {show ? <Grid item xs={12} md={activeChildren ? 6 : 12} className={classes.table}>
                <TableWrapper
                    records={filter && filterColumns && records.filter(a => a[filterColumns[name].value] === filter) || records}
                    columns={columns}
                    children={activeChildren}
                    path={path}
                    name={name}
                    history={history}
                    locationState={location.state}
                    disableClickList={disableClickList}
                />
            </Grid> : null}
            {activeChildren ?
                <Grid item xs={12} md={6}>
                    <div className="children">
                        {children}
                    </div>
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