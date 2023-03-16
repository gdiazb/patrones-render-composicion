import React from "react";

import './styles/index.css'

function CreateTodoButton({addTodo}) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onWrite = (e) => {
    setNewTodoValue(e.target.value)
  }

  const createTask = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
  }

  return(
    <>
      <h3 className="todo-aside__title">Crea una nueva tarea</h3>
      <form onSubmit={createTask}>
        <label htmlFor="name" className="todo-form__label">Nombre de la tarea</label>
        <textarea
          value={newTodoValue}
          onChange={onWrite}
          placeholder="Ejemplo: cortar cebolla"
          className="todo__input todo-form__input"
        />
        <button
          className="todo-form__button"
          type="submit"
        >
          Crear tarea
        </button>
      </form>
    </>
  )
}

export { CreateTodoButton }
