import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import './common/css/index.scss'
import App from "./components/entrance";

const NewApp = () => <div>111</div>;

render(<App />, document.getElementById("root"));


