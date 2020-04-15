import React from 'react';
import { Link } from 'react-router-dom';


export default function() {
    class EditRecordPage extends React.Component {
        constructor(props){
            super(props);
        }
    
        render() {
            return <div>
                <h1>Welcome to Edit Record Page</h1>
                <Link to="/">Home</Link>
            </div>
        }
    }
    
    return EditRecordPage;

}
