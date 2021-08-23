import React ,{ useState } from 'react';
import classes from  './Tasks.module.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
const FORMAT='dd/MM/yyyy';
function formateDate(date,format,locale){
    return dateFnsFormat(date,format,{locale});
}
const AddTasks=({onCancel,onAddTask})=>{
    const [task,setTask]=useState('');
    const [date,setDate]=useState(null);

    return(
        <div className={classes.add_task_dialog}>
        <input value={task} onChange={(event)=>setTask(event.target.value)} />
        <div className={classes.add_task_actions_container}>
            <div  className={classes.btns_container}>
                <button className={classes.add_btns}  onClick={()=>{onAddTask(task,date);
                    onCancel();setTask("")}} 
                    disabled={!task}
                     > Add Task </button>
                <button className={classes.cancel_btns} onClick={()=>{onCancel(); setTask('')}}>Cancel</button>
            </div>
            <div className={classes.icon_container}>
                <DayPickerInput 
                 onDayChange={(day)=>setDate(date)}
                 placeholder={`${dateFnsFormat(new Date(),FORMAT)}`}
                 formateDate={formateDate}
                 format={FORMAT}
                 dayPickerProps={{
                     modifiers:{
                         disabled:[{before:new Date()}]
                     }
                 }}
                 />
            </div>
        </div>
    </div>
    )
}

const TASKS_HEADER_MAPPING={
        INBOX:"Inbox",
        TODAY:"Today",
        NEXT_7:"Next 7 days"
}

 const Tasks=({selectedTab})=>{
     const [showAddTask,setShowAddTask]=useState(false);
     const [tasks,setTasks]=useState([]);

     const addNewTask=(text,date)=>{
         const newTaskItem={text , date:date || new Date()}
        setTasks((prevState)=>[...prevState,newTaskItem])
     }

     return(
      <div className={classes.tasks}>
        <h1>{ TASKS_HEADER_MAPPING[selectedTab]}</h1>
        <div  className={classes.add_task_btn} onClick={
            ()=>{setShowAddTask(
                (preState)=>!preState)
                }}>
            <span className={classes.plus}>+</span>
            <span className={classes.add_task_text}>Add task</span>
        </div>
       {showAddTask && <AddTasks onAddTask={addNewTask} onCancel={()=>setShowAddTask(false)} />}
       {(tasks.length>0)?(tasks.map(item=><p>{item.text} {`    `}{dateFnsFormat(new Date(item.date),FORMAT)}</p>)):<p>No task yet</p>}
      </div>
     )
 }
 export default Tasks;
 