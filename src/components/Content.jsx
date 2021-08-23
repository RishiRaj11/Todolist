import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Tasks from './Tasks';
import classes from './Content.module.css';
const Content=()=>{
    const[selectedTab,setselectedTab]=useState('INDEX');
    return <section className={classes.content}>
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <Tasks selectedTab={ selectedTab } />
    </section>
};
export default Content;