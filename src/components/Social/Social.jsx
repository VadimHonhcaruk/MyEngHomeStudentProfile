import React from 'react';
import c from './Social.module.css';
import { Image } from './Image';
import tel from '../../images/phone.png';
import viber from '../../images/viber.png';
import telegram from '../../images/telegram.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import googlemaps from '../../images/googlemaps.png';

export const Social = () => {
    return (
        <div className={c.social}>
            <Image alt='phone' src={tel} />
            <Image alt='viber' src={viber} />
            <Image alt='telegram' src={telegram} />
            <Image alt='instagram' src={instagram} />
            <Image alt='facebook' src={facebook} />
            <Image alt='googlemaps' src={googlemaps} />
        </div>
    )
}
