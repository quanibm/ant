import React, { Component } from "react";
import { Form, Icon, Input, Button, CheckBox } from "antd";

import "./login.scss";

const FormItem = Form.Item;
export default class login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      pwd: "",
      code: ""
    };
  }
  render() {
    const { msg, onLogin, captcha, updateCaptcha } = this.props;
    const { name, pwd, code } = this.state;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>台</span>
          </div>
          <div>
            <FormItem>
              <Input
                placeholder="账号"
                value={name}
                type="user"
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Input
                placeholder="密码"
                type="password"
                value={pwd}
                prefix={
                  <Icon type="lock" theme="outlined" style={{ fontSize: 13 }} />
                }
                onChange={e => {
                  this.setState({ pwd: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                className="login-form-button"
                onClick={() => {
                  onLogin(name, pwd, code);
                }}
              >
                {msg || "登录"}
              </Button>
            </FormItem>
          </div>
        </div>
      </div>
    );
  }
}
