import React from 'react';
import { Link } from 'react-router-dom';


export default function() {
    class RecordsPage extends React.Component {
        constructor(props){
            super(props);
        }
    
        render() {
            return <div>
                <h1>Welcome to Records Page</h1>
                <Link to="/">Home Page</Link>
            </div>
        }
    }
    
    return RecordsPage;

}
