import React from 'react';
import c from './Login.module.css';
import { LoginMain } from './LoginMain';
import { LoginFooter } from './LoginFooter';

export const Login = ({ phone, setPhone }) => {
    return (
        <>
            <LoginMain phone={phone} setPhone={setPhone} />
            <LoginFooter />
        </>
    )
}
