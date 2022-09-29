// react
import { Redirect } from 'react-router-dom';

// services
import { signOut } from '../../services/auth';

// context
import { UserContext } from '../../context/UserContext';

function submitTodo() {

}


export default function TodoList() {
  
  if (!user) {
    return <Redirect to="/auth/" />;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input placeholder='Create Todo'/>
      <button>{submitTodo}</button>
    </div>
  );
}
