import React from "react";
import './styles/todo-search.css'

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <input
        placeholder="Cebolla"
        className="todo__input todo-search__input"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }
