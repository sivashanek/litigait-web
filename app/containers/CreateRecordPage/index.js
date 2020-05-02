
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

    const styles={
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
                fields={columns.filter(_=>_.editRecord)}
                onSubmit={handleCreate.bind(this)}
                locationState={location.state}
            />
        </div>
        )

//         const [name, setName] = useState('');
//         const [email, setEmail] = useState('');
//         const [phone, setPhone] = useState('');
//         const [id, setId] = useState('');

//         const [client_id, setClientId] = useState('');
//         const [case_title, setCaseTitle] = useState('');
//         const [case_number, setCaseNumber] = useState('');

//         const start_date = new Date();
//         const status = "new";

//         return(<div>
//             <form>
//                 <div>
//                     <label>name:</label>
//                     <input name="name" type="text" onChange={(e) => setName(e.target.value)}  />
//                 </div>
//                 <div>
//                     <label>email:</label>
//                     <input name="email" type="text" onChange={(e) => setEmail(e.target.value)}  />
//                 </div>
//                 <div>
//                     <label>phone:</label>
//                     <input name="phone" type="text" onChange={(e) => setPhone(e.target.value)}  />
//                 </div>
//                 <div>
//                     <label>id:</label>
//                     <input name="id" type="text" onChange={(e) => setId(e.target.value)}  />
//                 </div>

//                 <div>
//                     <label>Client id:</label>
//                     <input name="client_id" type="text" onChange={(e) => setClientId(e.target.value)}  />
//                 </div>

//                 <div>
//                     <label>Case Title:</label>
//                     <input name="case_title" type="text" onChange={(e) => setCaseTitle(e.target.value)}  />
//                 </div>

//                 <div>
//                     <label>Case Number:</label>
//                     <input name="case_number" type="text" onChange={(e) => setCaseNumber(e.target.value)}  />
//                 </div>

             

//                 {/* <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.createRecord({name,email,phone}): actions.createRecord({client_id,case_title,case_number,start_date,status}))} >Create</button>
//                 <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.updateRecord({name,email,phone,id}): actions.updateRecord({client_id,case_title,case_number,id}))} >Update</button> */}

// <div style={styles}>
//                 <button type="button" onClick={() => dispatch(actions.createRecord({name,email,phone}))} >Create</button>
//                 <button type="button" onClick={() => dispatch(actions.updateRecord({name,email,phone,id}))} >Update</button>
// </div>
//             </form>
//         </div>)

    }

    return connect()(CreateRecordPage);


}