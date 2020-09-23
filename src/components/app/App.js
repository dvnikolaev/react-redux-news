import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.css";
import Header from "../app-header/app-header";
import Main from '../../pages/Main/page-main';

const PageNews = () => {
  return <h1>PAGE NEWS</h1>;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/news">
            <PageNews />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
