import * as React from 'react'
import { ITodo } from '../interface/interfaces'

type Props = {
    todo: ITodo,
    updateTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
    const checkTodo: string = todo.status ? `line-throug` : ''

    return (
        <div className='card mb-5 col-sm-4 text-dark'>
            <h3 className={todo.status ? 'card-title text-muted' : 'card-title'}>{todo.title}</h3>
            <img src={todo.img ? 'https://via.placeholder.com/150' : todo.img}
                alt="..." className='img-fluid'
                style={{ "width": "150px", "height": "150px", "marginLeft": "auto", "marginRight": "auto" }} />
            <div className='card-body'>
                <span className={checkTodo ? 'text-muted' : ''}>{todo.description}</span>
            </div>
            <button onClick={() => updateTodo(todo.id)}
                className={todo.status ? `btn btn-lg btn-dark mt-3 mb-2 disabled` : 'btn btn-danger mt-3 mb-2'}>
                Complete
            </button>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update
            </button> */}
        </div>
    )
}

export default Todo;
