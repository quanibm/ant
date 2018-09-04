import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import HeaderBox from "./headerbox/headerBox";
import SiderBox from "./siderBox/siderebox";
import Routes from "./routes/route";
const { Header, Content, Footer, Sider } = Layout;

const about = () => <h3>about</h3>;

export default class App extends Component {
  constructor() {
    super();
    const arr = [];
    this.state = {
      collapsed: false,
      breadArr: arr
    };
  }
  render() {
    const { msg, userInfo, romateMenus, captcha, loginOut } = this.props;
    const { collapsed, breadArr } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
          <SiderBox
            userInfo={userInfo}
            collapsed={collapsed}
            romateMenus={romateMenus}
          />
          <Layout>
            <HeaderBox />
            <Content>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/about"> Application List</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <Routes />
                <Route path="/about" component={about} />
              </div>
            </Content>
            <Footer>么子鬼</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
