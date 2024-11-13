export default function InputField({text, setText, addTodo}) {
  return (
    <label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={addTodo}>Add</button>
    </label>
  )
}
