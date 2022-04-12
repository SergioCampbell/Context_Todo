import { useState, useEffect } from 'react';
import Loader from './components/loaders/Loader';
import TodoProvider from './context/todoContext';
import Todos from './containers/Todos';
import AddTodo from './components/AddTodo';


export default function App() {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => setLoader(false), 500);

  }, [])

  return (
    <TodoProvider>
      {loader ?
        <Loader />
        :
        <main className='App text-center'>
          <h1 className='display-2 mb-5'>My little cat :3</h1>
          <p>Set a kitty name here:</p>
          <AddTodo />
          <Todos />
        </main>}
    </TodoProvider>
  );
}
