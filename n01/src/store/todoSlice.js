import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers: {
        addTodo(state, action){
            state.todo.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action){
            state.todo = state.todo.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action){
            const toggleTodo = state.todo.find(todo => todo.id === action.payload.id );
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer