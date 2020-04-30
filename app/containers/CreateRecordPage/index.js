
/**
 * 
 * Create Record Page
 * 
 */


import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreateRecordForm from 'components/CreateRecordForm';

export default function (name, path, columns, actions, selectors) {

    function handleCreate(record, dispatch, { form }) {
        dispatch(actions.createRecord(record, form))
    }

    function CreateRecordPage({ location }) {

        return (<div>
            <CreateRecordForm
                name={name}
                path={path}
                fields={columns.filter(_=>_.editRecord)}
                onSubmit={handleCreate.bind(this)}
                locationState={location.state}
            />
        </div>)

    }

    return connect()(CreateRecordPage);


}