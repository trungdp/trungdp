import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";
// import NavBarComponent from "./pages/home/components/NavBarComponent";
// import FooterComponent from "./pages/home/components/FooterComponent";

function App() {
  return (
    <Fragment>
      {/* <NavBarComponent/> */}
      <Switch>
        {routes.map(({ path, component, exact }, key) => (
          <Route exact={exact} path={path} component={component} key={key} />
        ))}
      </Switch>
      {/* <FooterComponent/> */}
    </Fragment>
  );
}

export default App;
