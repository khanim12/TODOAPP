import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onremoveTodo,onupdateTodo }) {
  const [editable,setEditable]=useState(false)
  const { id, content } = todo;
  const [newTodo,setNewTodo]=useState(content)
  const removeTodo = () => {
    onremoveTodo(id);
  }
  const updateTodo = () => {
    const request = {
      id: id,
      content:newTodo
    }
    onupdateTodo(request)
    setEditable(false)
  }
    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',border:'1px solid lightgrey',marginTop:'10px'}}>
        <div>{
        editable ?   <input style={{width:'350px'}} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}
        className='todo-input' type="text"/> : content
        
        }</div>
      <div>
              <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
          {
       
          editable ?  <FaCheck onClick={updateTodo}     className="todo-icons"/> :    <FaEdit className="todo-icons" onClick={()=>setEditable(true)} />
              }
       
          </div>
          
          
    </div>
  );
}

export default Todo;
