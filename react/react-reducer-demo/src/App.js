
import './App.css';
import Index from './pages/index';
import { Switch,Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </div>
  );
}

export default App;
