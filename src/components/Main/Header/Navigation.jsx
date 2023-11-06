import React from 'react';
import c from './Header.module.css';

export const Navigation = () => {
    return (
        <div className={c.nav}>
            <div className={c.dropdown}>Оля Мелехо <div className={c.arrow}>&#8882;</div></div>
            <div>Відвідування</div>
            <div>Документи</div>
            <div>Реквізити</div>
            <div>Контакти</div>
        </div>
    )
}
