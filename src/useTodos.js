import React from "react";
import uuid from 'react-uuid';

import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_TODOS } from "./utils/constants";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(STORAGE_TODOS, []);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id: uuid()
    })
    saveTodos(newTodos);
  };

  const completeTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodos,
    deleteTodos,
    loading,
    error,
  }
}

export { useTodos }
