import React from 'react'
import AddTodo from './components/AddTodo'

export default () => (
  <>
    <AddTodo saveTodo={(e) => console.log(e)}/>
  </>
)