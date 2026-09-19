 import Todo from "./Todo"
function TodoContainer({todos,deleteTodo}) {
  return (
<div className="container">
  {todos.map((todo,id)=>{
    return(
      <Todo key={id} index={id}todo = {todo} deleteTodo={deleteTodo}/>
    )
  })}
</div>

  )
}

export default TodoContainer