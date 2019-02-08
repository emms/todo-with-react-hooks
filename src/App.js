import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default () => {
  const [ todos, setTodos ] = useState([])

  return (
    <>
      <AddTodo saveTodo={ todoText => setTodos([...todos, todoText])} />
      <TodoList todos={ todos } />
    </>
  )
}