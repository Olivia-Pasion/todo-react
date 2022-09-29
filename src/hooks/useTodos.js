// react
import { useState, useEffect } from 'react';

// services
import { getListTodos } from '../services/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getListTodos();
        setTodos(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  
  return { todos, setTodos };
}