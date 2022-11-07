import React from 'react'
import "./Todos.css"

export default function Todos(props) {
  
    return (
    <div className="todo">
        <h3>{props.todo}</h3>
        <div onClick={() => props.delFunc(props.id)} className="btn-delete">x</div>
    </div>
  )
}
