import React, { useState } from 'react'
import "./Todos.css"

export default function Todos(props) {
  const [todo, setTodo] = useState(false)
    
  const handleTodo = () => {
      setTodo(!todo)
    }
  
  return (
      <>
      {props.todo &&
    <div onClick={() => handleTodo()} className="todo" style={{textDecoration: todo ? "line-through" : "none"}} >
      <h3>{props.todo}</h3>
        <div onClick={() => props.delFunc(props.id)} className="btn-delete"><i className="fa-solid fa-trash"></i></div>
    </div>}
    </>
  )
}
