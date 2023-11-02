import React from 'react';
import c from './Login.module.css';
import { Social } from '../Social/Social';

export const LoginFooter = () => {
    return (
        <div className={c.footer}>
            <Social />
        </div>
    )
}
