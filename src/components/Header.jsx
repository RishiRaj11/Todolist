import React from 'react';
import logo from '../assets/images/logo.png';
import classes from  './Header.module.css';
const Header=()=>{
    return (
    <header className={classes.header}>
        <nav>
            <div className={classes.logo}>
            <img className={classes.image} src={logo} alt="todolist" />              
            </div>
        </nav>
    </header>
    )
}
export default Header;