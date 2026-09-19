 
function Todo({todo,deleteTodo,index}) {
  return (
<div className="todo">
    <p>{todo}</p>
    <div className="actions">
      <input   type="checkbox" />
      <button onClick={()=>deleteTodo(index)}>delete</button>
    </div>
  </div>
    )
}

export default Todo