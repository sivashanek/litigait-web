
/**
 * 
 * Create Record Page
 * 
 */


import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreateRecordForm from 'components/CreateRecordForm';
import moment from 'moment';

export default function (name, path, columns, actions, selectors) {

    function handleCreate(record, dispatch, { form }) {
        dispatch(actions.createRecord(record, form))
    }

    const styles = {
        justifyContent: 'space-between',
        display: 'flex',
        margin: '14px auto',
        maxWidth: '150px',
        textAlign: 'center'
    }

    function CreateRecordPage({ location, dispatch }) {

        return (<div>
            <CreateRecordForm
                name={name}
                path={path}
                fields={columns.filter(_ => _.editRecord)}
                onSubmit={handleCreate.bind(this)}
                locationState={location.state}
            />
        </div>
        )
    }

    return connect()(CreateRecordPage);


}