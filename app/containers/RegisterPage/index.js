import React from 'react';
import { Link } from 'react-router-dom';


    class RegisterPage extends React.Component {
        constructor(props){
            super(props);
        }
    
        render() {
            return <div>
                <h1>Welcome to Register Page</h1>
                <Link to="/">Back</Link>
            </div>
        }
    }
    
    export default RegisterPage;


