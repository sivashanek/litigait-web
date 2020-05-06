
/**
 * 
 * Create Record Page
 * 
 */


import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreateRecordForm from 'components/CreateRecordForm';
import set from './utils';
import moment from 'moment';

export default function (name, path, columns, actions, selectors) {

    function handleCreate(record, dispatch, { form }) {
        if(name === 'cases.create'){
            console.log("case create",record.start_date);
            if(record.start_date =='undefined' || record.start_date=='null'){
                record.start_date = moment();
            }
            console.log("case create111",record.start_date);
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

    function CreateRecordPage({ location, dispatch }) {

        return (<div>
            <CreateRecordForm
                initialValues={set(columns)}
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