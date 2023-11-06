import React from 'react';
import c from './Main.module.css';
import { Header } from './Header/Header';
import { MainCenter } from './MainCenter/MainCenter';
import { Footer } from './Footer/Footer';

export const Main = () => {
    return (
        <div className={c.main}>
            <Header />
            <MainCenter />
            <Footer />
        </div>
    )
}
