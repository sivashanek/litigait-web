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

export default function (name, path, columns, actions, selectors) {
    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        const { dispatch, records } = props;
        
        useEffect(() => {
            dispatch(actions.loadRecords());
        },[]);

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
                    return <div key={index} style={{display:'flex'}}>
                        name: {record.name}, 
                        Email: {record.email},
                        <Link to={`${props.match.path}/${index}`}>View</Link>
                        {/* <button onClick={()=> dispatch(actions.deleteRecord("index"))}> Delete </button> */}
                        {/* <button onClick={()=> dispatch(actions.deleteRecord("f5ea8a00-8f82-4107-9b19-2f9e2a8a385c"))}> Delete </button> */}
                        <button onClick={()=> dispatch(actions.deleteRecord("f2f12d9e-5449-4560-be0d-bc7c33959041"))}> Delete </button>

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