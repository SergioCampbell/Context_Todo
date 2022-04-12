import * as React from 'react';
import { TodoContextType, ITodo } from '../interface/interfaces';
//exporting the context we already craeted with it interface
export const TodoContext = React.createContext<TodoContextType | null>(null);

 const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
    //create a base to return a value if is "empty" or "null"
  const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            img: "https://via.placeholder.com/150",
            title: 'task 1',
            description: 'description :O',
            status: false
        },
        {
            id: 2,
            img: "https://via.placeholder.com/150",
            title: 'task 2',
            description: 'description :D',
            status: true
        }
    ])

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            img: todo.img,
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

    const deleteTodo = (id: number) => {
        todos.filter((todo:ITodo) => {
            if(todo.id === id){
                todo.id = 0
                todo.title = ''
                todo.description = ''
                todo.img = ''
                todo.status = false
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{todos, saveTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
