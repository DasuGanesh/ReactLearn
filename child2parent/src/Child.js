// How to send data from child to parent component
import { useState } from "react";

function Child(props){

    let [newTask, setNewTask] = useState("")

    return(
        <>
        <input value={newTask}  onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button onClick={()=>{
            props.sendDataToParent(newTask)
        }}>Add Todo</button>
        </>
    )
}

export default Child;
