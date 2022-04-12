import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../interface/interfaces';

const DeleteTodo: React.FC = () => {
    const { deleteTodo } = React.useContext(TodoContext) as TodoContextType;
    const [formData, setFormData] = React.useState<ITodo | {}>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault();
        deleteTodo(formData);
    };

    let tabindex = -1

    return (
        <div className="modal-dialog modal-dialog-centered" id="staticBackdrop" tabIndex={tabindex} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form className="container" onSubmit={(e) => handleSaveTodo(e, formData)}>
                            <div>
                                <div className='mb-3'>
                                    <input onChange={handleForm} type="text" id="title" className='form-control' placeholder='Title'/>
                                    <label htmlFor="avatar" className='form-label'>Avatar</label>
                                    <input onChange={handleForm} type="file" id="img" className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <input onChange={handleForm} type="text" id="description" className='form-control' placeholder='Description'/>
                                </div>
                            </div>
                            <button className='btn btn-danger mb-3' disabled={formData === undefined ? true : false}>Add kitty</button>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteTodo;
