import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');

  const toggleTodoComplete = (todoId) => {
    setTodo(
      todo.map(
        elem => {
          if(elem.id !== todoId) return elem
        
          return {
            ...elem,
            completed: !elem.completed
          }
        }
      )
    )
  }
  const addTodo = () => {
    if(text.trim().length)
    setTodo([
      ...todo,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      } 
    ]);
    setText('');
  }
  const removeTodo = (todoId) => {
      setTodo(todo.filter(todo => todo.id !== todoId))
  } 
  return (
    <div className='App'>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={addTodo}>Add</button>
      </label>
      <ol>
        {todo.map((todo) => <li key={todo.id}>
          <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodoComplete(todo.id)}/>
          <span>{todo.text}</span>
          <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
        </li>)}
      </ol>
    </div>
  );
}
export default App;
