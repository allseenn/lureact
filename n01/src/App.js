import {useState} from 'react';
import TodoList from './components/TodoList'
import InputField from './components/InputField';

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
      <InputField setText={setText} text={text} addTodo={addTodo} />
      <TodoList todo={todo} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
    </div>
  );
}
export default App;
