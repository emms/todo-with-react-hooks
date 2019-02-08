import React, { useState } from 'react'

export default function AddTodo({ saveTodo }) {
  const [todoText, setTodoText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    saveTodo(todoText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo"
        onChange={event => setTodoText(event.target.value)}
        value={todoText}
      />
    </form>
  )
}
