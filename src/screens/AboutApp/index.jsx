import React from 'react';
import style from './style.module.css';

const AboutApp = () => {
    return (
        <div className={style.padding}>
            <h1>About The Author</h1>
            <p>In this app, you can add, delete, and submit. To delete items, simply click on the item you want to delete.
                To check items, simply click on the item you want to check. To add items, simply click on the submit box and
                type in the item you want to add.
            </p>
        </div>
    );
}

export default AboutApp;
