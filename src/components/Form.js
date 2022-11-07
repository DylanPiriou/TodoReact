import React, { useState } from "react";
import Todos from "./Todos";
import "./Form.css";
import {v4 as uuidv4} from 'uuid'

export default function Form() {
  const [dataArr, setDataArr] = useState([]);

  const [stateInput, setStateInput] = useState();

  const addTodo = e => {
    e.preventDefault()

    const newArr = [...dataArr]

    const newTodo = {}
      newTodo.txt = stateInput
      newTodo.id = uuidv4()

    newArr.push(newTodo)
    setDataArr(newArr)
    setStateInput("")
  }
  
  const linkedInput = e => {
    setStateInput(e)
  }
  
  const handleDel = (id) => {
    const filteredState = dataArr.filter(item => {
      return item.id !== id
    })
    setDataArr(filteredState)
  }
  
  return (
    <div className="todo-container">
      <form onSubmit={e => addTodo(e)} >
        <input
        value={stateInput}
        onChange={e => linkedInput(e.target.value)}
          type="text"
          placeholder="Entrer un todo"
          />
        <button>Ajouter</button>
      </form>
      <ul className="list-todos" >
        {dataArr.map(todo => {
        return <Todos key={todo.id} id={todo.id} todo={todo.txt} delFunc={handleDel} />;
      })}
      </ul>
    </div>
  );
}
