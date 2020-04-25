
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
                <button type="button" onClick={() => props.dispatch(actions.createRecord({name,email}))} >Create</button>
            </form>
        </div>)

    }

    return connect()(CreateRecordPage);

}