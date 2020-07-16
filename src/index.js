import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/fonts/Quicksand-Regular.ttf";
import "./assets/fonts/Quicksand-Bold.ttf";
import "./assets/fonts/Quicksand-Medium.ttf";
import "./assets/fonts/Quicksand-SemiBold.ttf";
import "./assets/fonts/Quicksand-Light.ttf";
import "./assets/fonts/CourierPrime-Regular.ttf";
import "./assets/fonts/CourierPrime-BoldItalic.ttf";
import "./assets/fonts/CourierPrime-Bold.ttf";
import "./assets/fonts/CourierPrime-Italic.ttf";
import "./assets/fonts/CutiveMono-Regular.ttf";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import 'react-circular-progressbar/dist/styles.css';
import NavComponent from "./pages/home/components/NavComponent";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<NavComponent/>*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
