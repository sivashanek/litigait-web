/**
 * 
 * Records Page
 * 
 */



import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function (name, path, actions, selectors) {
    console.log('actions', actions);
    console.log('selectors', selectors);

    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        return (<div>
            <h1>Welcome to Records Page</h1>
            <ul>
                <li><Link to={`${props.match.path}/create`}>Create Page</Link></li>
                <li><Link to={`${props.match.path}/2/edit`}>Edit Page</Link></li>
                <li><Link to={`${props.match.path}/2`}>View Page</Link></li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>)

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
        memo,
    )(RecordsPage);

}