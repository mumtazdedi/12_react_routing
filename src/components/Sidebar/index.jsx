import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className={style.sidebar}>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav me-3" id="v-tab" role="tablist" aria-orientation="vertical">
                        <Link className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" to="/" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</Link>
                        <Link className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" to="/about/about-app" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">About App</Link>
                        <Link className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" to="/about" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">About Author</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
