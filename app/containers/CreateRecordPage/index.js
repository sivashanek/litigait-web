
/**
 * 
 * Create Record Page
 * 
 */


import React, { useState } from 'react';
import { connect } from 'react-redux';

export default function (name, path, columns, actions, selectors) {

    function CreateRecordPage(props) {
        
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [id, setId] = useState('');

        const [client_id, setClientId] = useState('');
        const [case_title, setCaseTitle] = useState('');
        const [case_number, setCaseNumber] = useState('');

        const start_date = new Date();
        const status = "new";

        console.log("path = ",path);
        console.log("start_date = ",start_date);

        return (<div>
            <h1>Welcome to Create Record Page</h1>
            <form>
                <div>
                    <label>name:</label>
                    <input name="name" type="text" onChange={(e) => setName(e.target.value)}  />
                </div>
                <div>
                    <label>email:</label>
                    <input name="email" type="text" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label>phone:</label>
                    <input name="phone" type="text" onChange={(e) => setPhone(e.target.value)}  />
                </div>
                <div>
                    <label>id:</label>
                    <input name="id" type="text" onChange={(e) => setId(e.target.value)}  />
                </div>

                <div>
                    <label>Client id:</label>
                    <input name="client_id" type="text" onChange={(e) => setClientId(e.target.value)}  />
                </div>

                <div>
                    <label>Case Title:</label>
                    <input name="case_title" type="text" onChange={(e) => setCaseTitle(e.target.value)}  />
                </div>

                <div>
                    <label>Case Number:</label>
                    <input name="case_number" type="text" onChange={(e) => setCaseNumber(e.target.value)}  />
                </div>

             

                <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.createRecord({name,email,phone}): actions.createRecord({client_id,case_title,case_number,start_date,status}))} >Create</button>
                <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.updateRecord({name,email,phone,id}): actions.updateRecord({client_id,case_title,case_number,id}))} >Update</button>

                <button type="button" onClick={() => props.dispatch(actions.createRecord({name,email,phone}))} >Client Create</button>
                <button type="button" onClick={() => props.dispatch(actions.updateRecord({name,email,phone,id}))} >Client Update</button>

            </form>
        </div>)

    }

    return connect()(CreateRecordPage);

}