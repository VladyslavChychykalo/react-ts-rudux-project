import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import TodosPage from "../pages/TodosPage";
import AboutPage from "../pages/AboutPage";

// не забыть поставить @types для react-router-dom, npm i @types/react-router-dom
// https://github.com/DefinitelyTyped/DefinitelyTyped

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
