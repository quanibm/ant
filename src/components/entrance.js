import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Entrance from "./App";
import Login from "./login/login";
const About = () => <h4>abo1ut</h4>;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      userInfo: {},
      romateMenus: [],
      captcha: ""
    };
  }
  handleLogin(name, pwd) {
    console.log(name, pwd);
    this.setState({ msg: "登录中 ... " });
    const data = {
      header: {
        methods: "default_index"
      },
      data: {
        username: name,
        pwd: pwd
      }
    };
    console.log(data)
    NetWork.Interface.POST(data, (err, res) => {
      console.log(err)
      console.log(res)

      if (!err) {
        console.log(res)
      }
    });
  }
  loginOut() {}
  updateCaptcha() {}
  componentDidMount() {}

  render() {
    const { msg, userInfo, romateMenus, captcha } = this.state;
    const Component = !!userInfo.username ? Entrance : Login;
    return (
      <Component
        userInfo={userInfo}
        msg={msg}
        romateMenus={romateMenus}
        captcha={captcha}
        onLogin={(n, p, code) => {
          this.handleLogin(n, p, code);
        }}
        updateCaptcha={() => {
          this.getCaptcha();
        }}
        loginOut={() => {
          this.loginOut();
        }}
      />
    );
  }
}
