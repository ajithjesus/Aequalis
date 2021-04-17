
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


import Task1 from './Task1/Task1';




function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/" name="Task1" render={props => <Task1 {...props} />} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
