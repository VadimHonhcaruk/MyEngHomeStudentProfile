import React from 'react';
import c from './Social.module.css';

export const Image = ({ alt, src }) => {
    return (
        <img className={c.img} alt={alt} src={src}></img>
    )
}
