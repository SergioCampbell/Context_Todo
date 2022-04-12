import * as React from 'react';
import { TodoContextType, ITodo } from '../interface/interfaces';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, updateTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <div className='row container'>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
