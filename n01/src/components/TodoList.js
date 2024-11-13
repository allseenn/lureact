import TodoItem from "./TodoItem"

export default function TodoList({todo, toggleTodoComplete, removeTodo}) {
  return (
    <ul>
        {
        todo.map(todo => <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} {...todo} />)
        }
    </ul>
  )
}
