import * as React from 'react';
import { TodoContextType, ITodo } from '../interface/interfaces';

//exporting the context we already craeted with it interface
export const TodoContext = React.createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
    //create a base to return a value if is "empty" or "null"
  const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'task 1',
            description: 'description :O',
            status: false
        },
        {
            id: 2,
            title: 'task 2',
            description: 'description :D',
            status: true
        }
    ])

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: todo.title,
            description: todo.description,
            status: false
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if(todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
