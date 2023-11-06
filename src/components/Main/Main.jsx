import React from 'react';
import c from './Main.module.css';
import { Header } from './Header/Header';

export const Main = () => {
    return (
        <div className={c.main}>
            <Header />
        </div>
    )
}
