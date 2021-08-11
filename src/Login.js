import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth , provider } from './firebase'; // importing auth and provider from LOCAL firebase
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {

    const[state , dispatch] = useStateValue();

    const signIn = () => {
//Sign in
auth.signInWithPopup(provider).then( (result) => {
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
    });
})
.catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhj1PCezxx6WFtdJEVN3RsL8pU3PE2GpwkGAoXYroEaaG9pfZfFtFS7PzhUsLviaBtlA&usqp=CAU" alt="" />
                <img src="https://xploringindia.in/wp-content/uploads/2020/02/Earn-Money-For-Recoding-Audio-Yes-Facebook-Will-Pay-You-For-Your-Voice.jpg" alt="" />
            </div> 

            <Button type="Submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
