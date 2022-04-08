import * as React from 'react'
import { TodoContextType, ITodo } from '../interface/interfaces'
import { TodoContext } from '../context/todoContext'
import Todo from '../components/Todo'

export default function Todos() {
    const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType

    return (
        <>
            {todos.map((todo: ITodo) => {
                <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
            })}
        </>
    )
}