import React from 'react';
import c from './Header.module.css';
import { Navigation } from './Navigation';
import { EventTitle } from './EventTitle';

export const Header = () => {
    return (
        <div className={c.header}>
            <Navigation />
            <EventTitle />
        </div>
    )
}
