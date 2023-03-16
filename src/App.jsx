import React from "react";
import { useTodos } from "./useTodos";

import "./styles/app.css";
import "./styles/todo-layout.css";

import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { EmptyState } from "./components/EmptyState";
import { TodoLoading } from "./components/TodoLoading";
import { TodosError } from "./components/TodosError";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <div className="todo-layout">
      <div className="todo-content">
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodoLoading />}
          onEmptyTodos={() => <EmptyState />}
          searchText={searchValue}
          onEmptySearchResults={(searchText) => (
            <p>No hay resultados para {searchText}</p>
          )}
        >
          {(todo) => (
            <TodoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              key={todo.id}
              onComplete={() => completeTodos(todo.id)}
              onDelete={() => deleteTodos(todo.id)}
            />
          )}
        </TodoList>
      </div>
      <div className="todo-aside">
        <div className="todo-aside__content">
          <CreateTodoButton addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
