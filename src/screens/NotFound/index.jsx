import React from 'react';
import logo from '../../assets/images/notfound.jpg';
import style from './style.module.css';

const NotFound = () => {
    return (
        <div>
            <img className={style.logo} src={logo} alt="" srcset="" />
        </div>
    );
}

export default NotFound;
