import React from 'react'
import Todo from './Todo'
import './index.css';

export default function TodoList({ list, Ticklist }) {
  return (
    list.map(todo => {//dislpay all the list items
      return <Todo  key={todo.id} Ticklist={Ticklist} todo={todo} />
    })
  )
}