 
function InputContainer({ inputVal, writeTodo, todos }) {
  return (
    <div className='input-container'>
  <input type="text"value = {inputVal}onChange={writeTodo}placeholder='enter a task' name="" id="" />
  <button onClick={todos}>+</button>

</div>
  )
}

export default InputContainer