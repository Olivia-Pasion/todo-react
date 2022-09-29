// react
import { Redirect, Link } from 'react-router-dom';
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

  const { user, setUser } = useContext(UserContext);
  
  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
    // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

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
      {user && (
        <>
          <Link to="/auth/sign-in" onClick={handleSignOut}>
            Sign Out
          </Link>
        </>
      )}
      <h1>Todo List</h1>
      <div>
        <input 
          type="text"
          placeholder="create new todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleNewTodo}>Add</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onClick={() => handleClick(todo)}
            />
            {todo.description}
          </div>
        ))}
      </div>
    </div>
  );
}
