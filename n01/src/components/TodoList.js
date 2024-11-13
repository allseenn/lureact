import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux' 
export default function TodoList() {
    const todo = useSelector(state => state.todo.todo)
  return (
    <ul>
        {
        todo.map(todo => <TodoItem key={todo.id} {...todo} />)
        }
    </ul>
  )
}
