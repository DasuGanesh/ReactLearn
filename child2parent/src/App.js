// How to send data from child to parent component--->Child.js
import { useState } from "react";
import Child from "./Child";
function App(){
  let[Todos, updateTodos] = useState([
    'Task1',
    'Task2'
  ])
// Callback function to receive data from child
const addNew = (task)=>{
  updateTodos([...Todos,task])
}
  return(
    <>
    <Child sendDataToParent={addNew}></Child>
    <ul>
      {Todos.map(
        (t,index)=>
          <li key={index}>{t}</li>
      )}
    </ul>    
    </>
  )
}
export default App;