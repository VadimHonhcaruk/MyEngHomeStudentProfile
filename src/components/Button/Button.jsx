import React from 'react';
import c from './Button.module.css';

export const Button = ({ text }) => {
    return (
        <div className={c.button}>{text}</div>
    )
}
