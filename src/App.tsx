
//import CatList from './components/CatList';
//import Cats from './components/Cats';
import { useState, useEffect, createContext, useContext } from 'react';
import Loader from './components/loaders/Loader';
//import Create from './components/Create';
import { TodoProvider } from './context/todoContext';
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
     <main className='App text-center'>
       <h1 className='display-2'>mega title</h1>
       <AddTodo />
       <Todos />
     </main>
   </TodoProvider>
  );
}
