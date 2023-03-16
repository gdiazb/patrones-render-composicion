import React from "react";
import './styles/todo-counter.css'

function TodoCounter({ totalTodos: total, completedTodos: completed }) {

  return(
    <h2 className="todo__counter-title">Has completado {completed} de {total} TODOs</h2>
  )
}

export { TodoCounter }
