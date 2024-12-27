
import './TodoList.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let listStyle={listStyle:'none',marginBottom:"15px",fontSize:"25px"}
    let iconStyle={fontSize:"35px",cursor:"pointer",marginRight:"32px"}
    

    let [todos,setTodos]=useState([{task:"sample task", id:uuidv4(),isdone:false}])
    let [newTodo,setNewTodo]=useState("")


    let addNewTodo=()=>{
        setTodos((pretodos)=>{
            return [...pretodos,{task:newTodo,id:uuidv4(),isdone:false}]
        })
        setNewTodo("")
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
       
        
    }

    let deleteTodo=(id)=>{
       setTodos((prevTodos)=> prevTodos.filter((todo)=>todo.id!=id))
       
    }

    const MarkAsAllDone=()=>{

        setTodos((prevtodo)=>(
            
            prevtodo.map((todo)=>{
            return{
                ...todo,
                isdone:true,
            }

        })))
        
    }

   

    
    
    
    const markAsDone=(id)=>{

        setTodos((prevtodo)=>(
            
            prevtodo.map((todo)=>{
                if(todo.id===id){
            return{
                ...todo,
                isdone:true
                
            }
        }else{
            return todo;
        }

        })))
        
    }


    return(


        <div>
            <h1>Todo App</h1>

            <input type="text" value={newTodo}  onChange={updateTodoValue} placeholder="enter your task" /> 
            
            <button onClick={addNewTodo} >Add Task</button>
            <br /> <br />  

            <ul>
                
                
               {
                todos.map((todo)=>(
                     <li style={listStyle}  key={todo.id} > 
                     
                     <span  style={todo.isdone?{textDecorationLine:"line-through",color:"green"}:{} }  >{todo.task}</span>
                     
                    
                     <i style={iconStyle}  class="fa-solid fa-delete-left" onClick={ ()=> deleteTodo(todo.id)}  ></i>
                     
                     
                     <i id='mark-icon'   class="fa-solid fa-check"  onClick={ ()=>markAsDone(todo.id)}
                     
                     style=  { todo.isdone?{color:"green"}:{} } >

                     </i>
                     
                     </li>
                        
                    
                ))
               }
                
                
            

            </ul>
            <br /><br />
            <button onClick={MarkAsAllDone} > Mark As All Done</button> 
            
            

            

        </div>
    )
}