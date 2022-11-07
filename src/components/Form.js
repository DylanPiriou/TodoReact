import React, { useEffect, useState } from "react";
import Todos from "./Todos";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  // state des todos
  const [dataArr, setDataArr] = useState([]);
  // state de l'input
  const [stateInput, setStateInput] = useState("");

  // fonction pour ajouter des todos
  const addTodo = (e) => {
    e.preventDefault();
    if (stateInput === "") {
      return;
    }

    const newArr = [...dataArr];
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();

    newArr.push(newTodo);
    setDataArr(newArr);
    setStateInput("");
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  // fonction pour donner la valeur de l'input au state
  const linkedInput = (e) => {
    setStateInput(e);
  };

  // fonction pour supprimer des todos
  const handleDel = (id) => {
    const filteredState = dataArr.filter((item) => item.id !== id);
    window.localStorage.todos = JSON.stringify(filteredState);
    setDataArr(filteredState)
  };

  useEffect(() => {
    let todos = [];
    const todosJson = localStorage.getItem("todos");
    if (todosJson) {
      todos = JSON.parse(todosJson);
      setDataArr(todos);
    }
  }, []);

  return (
    <div className="todo-container">
      <form onSubmit={(e) => addTodo(e)}>
        <input
          value={stateInput}
          onChange={(e) => linkedInput(e.target.value)}
          type="text"
          placeholder="Entrer un todo"
        />
        <button>Ajouter</button>
      </form>
      {/* {stateInput === "" ? <p>Entrer des todos</p> : null} */}
      <div className="list-todos">
        {dataArr.length > 0 ? (
          dataArr.map((todo) => {
            return (
              <Todos
                input={stateInput}
                key={todo.id}
                id={todo.id}
                todo={todo.txt}
                delFunc={handleDel}
              />
            );
          })
        ) : (
          <p className="default-txt">Pas de todos.😥</p>
        )}
      </div>
    </div>
  );
}
