import React, { useState } from "react";
// import { TodoProvider } from "./TodoConstext";

// import { View } from './View'

function App() {
  const [state, setState] = useState('Estado compartido')

  return (
    <>
      <TodoHeader>
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}></TodoItem>
      </TodoList>
    </>
  )
}

function TodoCounter() {
  return (
    <>
      <p>TodoCounter</p>
    </>
  )
}

function TodoSearch() {
  return (
    <>
      <p>TodoSearch</p>
    </>
  )
}

function TodoHeader({ children }) {
  return (
    <header>
      { children }
    </header>
  )
}

function TodoItem({ state }) {
  return (
    <>
      <p>TodoItem {state}</p>
    </>
  )
}

function TodoList({ children }) {
  return (
    <section>
      { children }
    </section>
  )
}


// function App() {
//   return (
//     <TodoProvider>
//       <View />
//     </TodoProvider>
//   );
// }

export default App;
