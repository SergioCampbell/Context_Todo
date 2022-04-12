export interface ITodo {
    id: number,
    img: string,
    title: string,
    description: string,
    status: boolean
}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}