import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import App from "./App";
import Login from "./login/login";
const About = () => <h4>abo1ut</h4>;

const handleFixAuth = (data, arr = []) => {
  const ss = d => {
    if (!!d.title) {
      arr.push(d.tilte);
    } else {
      Object.keys(d).forEach(key => {
        ss(d[key]);
      });
    }
  };
};

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
    NetWork.Interface.POST(data, (err, res) => {
      if (!err) {
        const header = res.header || {};
        if (header.errorCode == 0) {
          const data = res.data || {};
          const menus = data.menus || {};
          var romateMenus = handleFixAuth(menus);

          window.userInfo = data;
          data.name = data.username || "";

          this.setState({
            userInfo: data,
            romateMenus: romateMenus,
            msg: ""
          });
          this.handleSave(name, pwd);
        }
      } else {
        this.setState({
          msg: ""
        });
      }
    });
  }
  handleSave(name, pwd) {
    (localStorage.name = name), (localStorage.pwd = pwd);
  }
  handleFixAuth(menus) {}
  loginOut() {}
  updateCaptcha() {}
  autoLogin() {
    this.setState({ msg: "自动登录中..." });
    var data = {
      header: {
        // method: 'captcha'
        methods: "default_center"
      },
      data: {}
    };
    NetWork.Interface.POST(data, (err, res) => {
      if (!err) {
        const data = res.data || {};
        const header = res.header || {};
        if (header.errorCode == 0) {
          var menus = data.menus || {};
          var romateMenus = handleFixAuth(menus);
          window.userInfo = data;
          this.setState({
            userInfo: data,
            msg: "",
            romateMenus
          });
        } else {
          this.setState({ msg: "" });
        }
      } else {
        this.setState({ msg: "" });
      }
    });
  }
  componentDidMount() {
    console.log("object")
    this.autoLogin();
  }

  render() {
    const { msg, userInfo, romateMenus, captcha } = this.state;
    const Component = userInfo.username ? App : Login;
    // const Component = App;
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
