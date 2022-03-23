import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'//used at the end for rendering the list
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [list, setlist] = useState([])
  const Refname = useRef()//useful for input
// these use effects store the list in local memory in change and disply on demand
//2 
useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) 
    setlist(storedTodos)
  }, [])
//1
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
  }, [list])

  function Ticklist(id) {//to tick and untick 
    const newlist = [...list]//copy is created
    const todo = newlist.find(todo => todo.id === id)//find the click elemnt and tick it or untick it both
    todo.completed = !todo.completed
    setlist(newlist)
  }

  function Addinlist(e) 
  {
    const name = Refname.current.value//getting the input from input box
    if (name === '') 
    return
    //if nothing then return nothing
    //else add the item in the list by calling set list
    //assigning unique id name and not done
    setlist(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false}]//creating new list and ging all objects the names
    })
    Refname.current.value = null//to make  box empty
  }

  function Clearlist() 
  {
    const newlist1 = list.filter(todo => !todo.completed)
    //make new list with only not 
    //completed and return new list in set list
    setlist(newlist1)
  }

  function giveremainginglist()
  {
    
return list.filter(todo => !todo.complete).length

  }

  return (
    <>
    <button class="del" onClick={Clearlist}>Clear Done</button>
    <div class="Main">
    <div >
      <h1 >TODO LIST</h1>
      </div>
      <input class="inputbox"ref={Refname} type="text" placeholder='Enter the Item' />
      <button onClick={Addinlist}>Add Item</button>
      
      
      <div class="remaining"> **{giveremainginglist()} Remaining   **</div>
      <br></br>
          <TodoList  list={list} Ticklist={Ticklist} />
          </div>
          
    </>
  )
}

export default App;