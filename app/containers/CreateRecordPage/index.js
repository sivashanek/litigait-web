
/**
 * 
 * Create Record Page
 * 
 */


import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import CreateRecordForm from 'components/CreateRecordForm';
import set from './utils';
import moment from 'moment';

export default function (name, path, columns, actions, selectors) {

    const { selectRecordsMetaData } = selectors;

    function handleCreate(record, dispatch, { form }) {
        if(name === 'cases.create'){
            if(record.start_date =='undefined' || record.start_date=='null'){
                record.start_date = moment();
            }
            record.status = changeStatus(record.status);
        }
        dispatch(actions.createRecord(record, form))
    }

    function changeStatus(status){
        if(status=='New') return 'new';
        if(status=='Active') return 'active';
        if(status=='Close') return 'closed';
        return;
    }

    const styles = {
        justifyContent: 'space-between',
        display: 'flex',
        margin: '14px auto',
        maxWidth: '150px',
        textAlign: 'center'
    }

    function CreateRecordPage({ location, dispatch, metaData }) {

        return (<div>
            <CreateRecordForm
                initialValues={set(columns)}
                name={name}
                path={path}
                metaData={metaData}
                fields={columns.filter(_ => _.editRecord)}
                onSubmit={handleCreate.bind(this)}
                locationState={location.state}
            />
        </div>
        )
    }

    CreateRecordPage.propTypes = {
        metaData: PropTypes.object,
    };

    const mapStateToProps = createStructuredSelector({
        metaData: selectRecordsMetaData(),
    });

    const withConnect = connect(
        mapStateToProps
    );


    return compose(
        withConnect,
        memo
    )(CreateRecordPage);
}