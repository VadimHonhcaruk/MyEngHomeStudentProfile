import React from 'react';
import c from './Footer.module.css';
import { Social } from '../../Social/Social';
import logo from '../../../images/logoWhite.png'

export const Footer = () => {
    return (
        <div className={c.footer}>
            <div className={c.footerLeft}>
                <img alt='MyEngHomeWhite' src={logo} className={c.logo}></img>
            </div>
            <div className={c.social}>
                <Social />
            </div>
        </div>
    )
}
