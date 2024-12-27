
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

export default function MyLudo(){

    const [todos,setTodos]=useState(['sample task'])
    const [newTodo,setNewTodo]=useState("")

    let addTask=()=>{

        setTodos([...todos,newTodo])
        setNewTodo("")
    }

    let newTask=(event)=>{
        setNewTodo(event.target.value)
    }

    

    return(
        <div>
            <h1>my todo list</h1>
            <input type="text" value={newTodo} onChange={newTask} placeholder="enter your task" />
            <button onClick={addTask} >Add Task</button>
            <br /><br /><br />

            <ul>
                {
                    todos.map((todo)=>(
                        <li>{todo}</li>
                    ))
                }
            </ul>


            
           
        </div>
    )
}