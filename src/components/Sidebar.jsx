import React from 'react';
import classes from './Sidebar.module.css';
import {FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa';
const Sidebar=({selectedTab,setselectedTab})=>{
    console.log({selectedTab});
    return (
        <div className={classes.sidebar}>
        <div onClick={()=>{setselectedTab('INDEX')}}>
            <FaInbox  className={classes.icon}/>Inbox
            </div>
        <div  onClick={()=>{setselectedTab('Today')}}>
            <FaRegCalendarAlt  className={classes.icon}/>Today
            </div>
        <div  onClick={()=>{setselectedTab('Next_7')}}>
            <FaRegCalendar  className={classes.icon}/>Next 7 days
            </div>
        </div>
    )
}
export default Sidebar;