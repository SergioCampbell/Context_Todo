import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../interface/interfaces';

const AddTodo: React.FC = () => {
    const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
    const [formData, setFormData] = React.useState<ITodo | {}>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault();
        saveTodo(formData);
    };

    return (
        <form className="container" onSubmit={(e) => handleSaveTodo(e, formData)}>
            <div>
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>Title</label>
                    <input onChange={handleForm} type="text" id="title" className='form-control' />
                    <label htmlFor="avatar" className='form-label'>Avatar</label>
                    <input onChange={handleForm} type="file" id="img" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description</label>
                    <input onChange={handleForm} type="text" id="description" className='form-control' />
                </div>
            </div>
            <button className='btn btn-danger mb-3' disabled={formData === undefined ? true : false}>Add kitty</button>
        </form>
    );
};

export default AddTodo;
