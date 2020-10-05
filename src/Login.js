import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state,dispatch] = useStateValue();
    
    const signIn = () => {

        auth.signInWithPopup(provider)
            .then(result => { 
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch(err => {
                alert(err.message);
            });
        
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" alt=""/>
                <h1> Sign in to Slack Clone</h1>
                <p>We do not collect any of your private data...</p>

                <Button onClick={signIn}> Sign in With Google</Button>

            </div>
        </div>
    )
}

export default Login;