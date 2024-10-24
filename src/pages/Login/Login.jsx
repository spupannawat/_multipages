import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { verifyUser } from '../../data/users';
import { useEffect } from 'react';

import './Login.css';

function Login({ setToken }) {
    const userRef = useRef();
    const passRef = useRef();
    
    console.log(setToken)

    return (
        <div className="login-container">
            <Form.Label htmlFor="username">USERNAME&nbsp;<span className='bi bi-person-fill'></span></Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder="Username"
                style={{ textAlign: 'center' }}
                ref={userRef} 
            />

            <Form.Label htmlFor="password">PASSWORD&nbsp;<span className='bi bi-incognito'></span></Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                style={{ textAlign: 'center' }}
                ref={passRef} 
            />

            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    const user = userRef.current.value.trim();
                    const pass = passRef.current.value.trim();
                    userRef.current.value = '';
                    passRef.current.value = '';
                    const userInfo = verifyUser(user, pass);

                    if (userInfo === null) {
                        alert('Wrong username or password');
                        userRef.current.focus();

                    } else {
                        setToken(userInfo.token);
                    }
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
