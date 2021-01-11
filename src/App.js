import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./router/Routes";
export default function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((val, key) => (
          <Route
            key={String(key)}
            path={val.route}
            exact={val.isExact}
            component={val.component}
          />
        ))}
      </Switch>
    </Router>
  );
}
