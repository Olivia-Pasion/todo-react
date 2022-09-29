// React imports
import { Route, Switch, Redirect } from 'react-router-dom';

// component imports
import Auth from './components/Auth/Auth';
import Todos from './components/Todos/Todos';

// style imports
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
        <Route path="*">
          <Redirect to="/auth/sign-up" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
