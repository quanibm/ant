import React, { Component } from "react";
import { Menu, Icon, Layout, Badge, Popover } from "antd";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import "./siderbox.scss";
export default class sliderebox extends Component {
  render() {
    const { userInfo, romateMenus } = this.props;
    return (
      <Sider>
        <div className="logo slide-logo">
          <span>'dwwx'</span>
        </div>
      </Sider>
    );
  }
}
