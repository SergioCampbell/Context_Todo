import * as React from 'react'
import { ITodo } from '../interface/interfaces'

type Props = {
    todo: ITodo,
    updateTodo: (id: number) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
    const checkTodo: string = todo.status ? `line-throug` : ''

    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='card-title'>{todo.title}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <button onClick={() => updateTodo(todo.id)} 
            className={todo.status ? `hide-button` : 'card-button'}>
                Complete
            </button>
        </div>
    )
}

export default Todo;
