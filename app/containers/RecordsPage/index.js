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

export default function (name, path, actions, selectors) {
    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        console.log('Recordd', props);
        const { dispatch, records } = props;
        
        useEffect(() => {
            dispatch(actions.loadRecords());
        });

        return (<div>
            <h1>{name}</h1>
            <ul>
                <li><Link to={`${props.match.path}/create`}>Create Page</Link></li>
                <li><Link to={`${props.match.path}/2/edit`}>Edit Page</Link></li>
            </ul>
            <div>
                Records:
                {records && records.length > 0 ? 
                    records.map((record, index) => {
                    return <div style={{display:'flex'}}>
                        name: {record.name}, 
                        Email: {record.email},
                        <Link to={`${props.match.path}/${index}`}>View</Link>
                        <button onClick={()=> dispatch(actions.deleteRecord(index))}> Delete </button>
                    </div>
                    }) : null}
                    
            </div>
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
        memo
    )(RecordsPage);

}