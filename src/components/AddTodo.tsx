import * as React from 'react'
import { TodoContext } from '../context/todoContext'
import { TodoContextType, ITodo } from '../interface/interfaces'

const AddTodo: React.FC = () => {
    const { saveTodo } = React.useContext(TodoContext) as TodoContextType
    const [formData, setFormData] = React.useState<ITodo | {}> ()
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault()
        saveTodo(formData)
    }

    return(
        <form className='input-group' onSubmit={(e) => handleSaveTodo(e, formData)}>
            <div className='container'>
                <input 
                placeholder='title' 
                type="text" id="title"
                onChange={handleSubmit}/>
                <input 
                placeholder='description' 
                type="text" id="description"
                onChange={handleSubmit}/>
            </div>
            <button disabled={handleSubmit === undefined ? true : false}>+</button>
        </form>
    )
}

export default AddTodo;
