import React from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
    
      <Router>

      <Switch>
          <Redirect exact from="/" to = "/todos" />
          <Route exact path="/todos" component = {Home}/>
          <Route path = "/todos/add" component = {AddEdit} />
          <Route path = "/todos/:id" component = {AddEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
