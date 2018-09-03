import React, { Component } from "react";
import { Form, Icon, Input, Button, CheckBox } from "antd";

import './login.scss';

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
    const { name, pwd, code } = this.state;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>电销11点3位后11台</span>
          </div>
          <div>
            <FormItem>
              <Input
                placeholder="账号"
                value={name}
                onCHange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Input
                placeholder="密码"
                value={pwd}
                onCHange={e => {
                  this.setState({ pwd: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Button >
                登录
              </Button>
            </FormItem>
          </div>
        </div>
      </div>
    );
  }
}
