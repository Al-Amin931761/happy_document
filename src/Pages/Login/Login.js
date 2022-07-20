import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form className='mt-5 mb-5'>
            <h3 className='fw-bold'>Happy net user login</h3>
            <p>Account: <input style={{ width: '76%', marginLeft: '9px' }} type="text" placeholder='six characters of letters, numbers' required></input></p>
            <p >Password: <input style={{ width: '76%' }} type="password" placeholder='four digits' required></input></p>
            <Button className='d-block w-25 mx-auto border border-success' variant="danger" type='submit'>Log in</Button>
            <div className='d-flex justify-content-evenly mt-3'>
                <Link className='link' to='#'>Sign up now</Link>
                <Link className='link' to='#'>Forgot Password</Link>
            </div>
        </form>
    );
};

export default Login;