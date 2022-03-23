import React from 'react'

export default function Todo({ todo, Ticklist }) {
  function handleTodoClick() {
   Ticklist(todo.id)// calling the function and passing the id
  }
  // takes input from here and stores the id 
  return (
    <div class="items">
      <label >
     
        <input type="checkbox" class="cb" checked={todo.completed} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}