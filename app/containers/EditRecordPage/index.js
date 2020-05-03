
/**
 * 
 * Edit Record Page
 * 
 */


import React, { useState, useEffect,  memo } from 'react';
import { connect } from 'react-redux';
import EditRecordForm from 'components/EditRecordForm';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import get from './utils';

export default function (name, path, columns, actions, selectors) {

    const { selectRecord } = selectors;    
    function handleEdit(record, dispatch, { form }) {
        dispatch(actions.updateRecord(record, form))
    }

    function EditRecordPage({ location, record }) {

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            }, 500);
        }, []);

        return (<div>
            {!loading ? <EditRecordForm
                initialValues={record && get(name, record) || {}}
                form={`editRecord.${record.id}`}
                name={name}
                path={path}
                fields={columns.filter(_=>_.editRecord)}
                onSubmit={handleEdit.bind(this)}
                locationState={location.state}
            /> : 'Loading...'}
        </div>)

    }

    EditRecordPage.propTypes = {
        record: PropTypes.object,
    };

    const mapStateToProps = createStructuredSelector({
        record: (state, props) => selectRecord(props.match.params.id)(state),
    });

    const withConnect = connect(
        mapStateToProps,
    );


    return compose(
        withConnect,
        memo
    )(EditRecordPage);

}