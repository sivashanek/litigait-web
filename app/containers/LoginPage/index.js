import React from 'react';
import { Link } from 'react-router-dom';



    class LoginPage extends React.Component {
        constructor(props){
            super(props);
        }
    
        render() {
            return <div>
                <h1>Welcome to Login Page</h1>
                <Link to="/register">SignUp</Link>
            </div>
        }
    }
    
    export default LoginPage;

