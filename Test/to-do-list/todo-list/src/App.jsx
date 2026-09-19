import { useState } from 'react'
 import InputContainer from './components/InputContainer'
 import TodoContainer from './components/TodoContainer'
import './App.css'

function App() {
  const [inputVal, setinputVal] = useState('')
  const [todos,setTodos] = useState([])
  function inputwriteTodo(e){
     setinputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos)=>[...prevTodos,inputVal])
      setinputVal('')
    }

  }
  function deleteTodo(todoindex){
    setTodos((prevTodos)=> prevTodos.filter((todo, index) => {
      return index !== todoindex;
    })
  );
}
  console.log(todos)

  return (
  <main>
<h1>To Do list</h1>
<InputContainer
  inputVal={inputVal}
  writeTodo={inputwriteTodo}
  todos={addTodo}
/>
<TodoContainer todos={todos} deleteTodo={deleteTodo}/>



  </main>
  )
}

export default App
