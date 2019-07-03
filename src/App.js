import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
