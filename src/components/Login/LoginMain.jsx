import React, { useState } from 'react';
import c from './Login.module.css';
import logo from '../../images/logo.png';
import { inputChange, onblurInput, onfocusInput } from "../../functions/phoneInput";
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const LoginMain = ({ phone, setPhone }) => {

    const [error, setError] = useState(false);

    return (
        <div className={c.main}>
            <div className={c.login}>
                <div className={c.loginIn}>
                    <img className={c.img} alt='logo' src={logo}></img>
                    <p className={c.please}>Будь ласка, вкажіть свій номер телефону</p>
                    <Input maxLength="19" inputname='phoneNum' onfocus={onfocusInput} onBlur={onblurInput} onInput={inputChange} label='Номер телефону' name={phone} error={error} onchange={(e) => { setPhone(e.target.value); }} pattern={/^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/} />
                    <Button text='Увійти' />
                </div>
            </div>
        </div>
    )
}
