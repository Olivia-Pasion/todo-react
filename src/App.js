// React imports
import { Route, Switch } from 'react-router-dom';

// component imports
import Auth from './components/Auth/Auth';

// style imports
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
