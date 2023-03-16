import React from "react";
import './styles/todo-list.css'

function TodoList(props) {
  const {
    children,
    error,
    onError,
    loading,
    onLoading,
    searchedTodos,
    onEmptyTodos,
    render,
    totalTodos,
    onEmptySearchResults,
    searchText
  } = props

  return(
    <div className="todo__list-wrapper">
      { error && onError() }
      { loading && onLoading() }
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}

      <ul className="todo__list">
        {searchedTodos.map(render || children)}
      </ul>
    </div>
  )
}

export { TodoList }
