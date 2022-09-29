// React imports
import { Route, Switch, Redirect } from 'react-router-dom';

// component imports
import Auth from './components/Auth/Auth';

// style imports
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-up" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
