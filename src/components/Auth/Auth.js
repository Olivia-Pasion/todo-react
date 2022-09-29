// react imports
import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';

// context
import { UserContext } from '../../context/UserContext';

// services
import { authUser } from '../../services/auth';

// style
import './Auth.css';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const clickHandler = async () => {
    const userResp = await authUser(email, password, type);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/todos" />;
  }

  return (
    <div className='auth box'>
      <h1>Log in</h1>
      <div className='auth-type'>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <div className="auth-controls">
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="email" 
        />
      </div>
      <div className="auth-controls">
        <input 
          type="text" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} placeholder="password" 
        />
      </div>
      <button onClick={clickHandler}>Go</button>
    </div>
  );
}
