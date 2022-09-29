// react
import { Redirect } from 'react-router-dom';
import { useState, useContext } from 'react';

// services
import { signOut } from '../../services/auth';
import { createListTodo, toggleComplete } from '../../services/todos';

// hooks
import { useTodos } from '../../hooks/useTodos';
// context
import { UserContext } from '../../context/UserContext';



export default function Todos() {
  const [description, setDescription] = useState('');
  
  const { todos, setTodos } = useTodos();

  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleClick = async (todo) => {
    try {
      const updatedTodo = await toggleComplete(todo);
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo)));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const handleNewTodo = async () => {
    try {
      await createListTodo(description);
      setTodos((prev) => [...prev, { description }]);
      setDescription('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input placeholder='Create Todo'/>
      <button>{submitTodo}</button>
    </div>
  );
}
