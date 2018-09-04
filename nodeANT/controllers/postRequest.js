"use strict";

function default_index(ctx, next, data) {
  if (data.data.username === "1" && data.data.pwd === "1") {
    ctx.response.status = 200;
    ctx.response.type = "text/json";
    const bodyData = {
      header: { errorCode: 0, errorMsg: "登陆成功，欢迎回来！" },
      data: {
        groupid: "1",
        groupname: "全权限组别",
        name: "admin",
        username: "admin",
        menus: [
          {
            1: { title: "管理员管理", method: "admin_" },
            7: { title: "开发管理", method: "developer_" },
            44: { title: "日志管理", method: "log_" },
            272: { title: "分组管理", method: "channel_" },
            435: { title: "会员管理", method: "users_" },
            455: { title: "团队管理", method: "团队管理_团队管理" }
          },
          {
            2: { title: "级别列表", method: "admingroup_list" },
            3: { title: "管理员列表", method: "adminuser_list" },
            5: { title: "管理员列表", method: "adminuser_list" },
            390: { title: "管理员列表", method: "adminuser_list" },
            6: { title: "修改密码", method: "adminuser_changepass" }
          }
        ]
      }
    };
    ctx.response.body = bodyData;
  }
}

function default_center(ctx, next, data) {
  console.log("自动登录")
  ctx.response.status = 200;
  ctx.response.type = "text/json";
  const bodyData = {
    header: { errorCode: 0, errorMsg: "登陆成功，欢迎回来！" },
    data: {
      groupid: "1",
      groupname: "全权限组别",
      name: "admin",
      username: "admin",
      menus: [
        {
          1: { title: "管理员管理", method: "admin_" },
          7: { title: "开发管理", method: "developer_" },
          44: { title: "日志管理", method: "log_" },
          272: { title: "分组管理", method: "channel_" },
          435: { title: "会员管理", method: "users_" },
          455: { title: "团队管理", method: "团队管理_团队管理" }
        },
        {
          2: { title: "级别列表", method: "admingroup_list" },
          3: { title: "管理员列表", method: "adminuser_list" },
          5: { title: "管理员列表", method: "adminuser_list" },
          390: { title: "管理员列表", method: "adminuser_list" },
          6: { title: "修改密码", method: "adminuser_changepass" }
        }
      ]
    }
  };
  console.log(bodyData);
  ctx.response.body = bodyData;
}
module.exports = {
  "POST /dizhi": async (ctx, next) => {
    console.log(ctx.request.body);
    const data = ctx.request.body;

    switch (data.header.methods) {
      case "default_center":
        default_center(ctx, next, data);
        break;
      case "default_index":
        default_index(ctx, next, data);
        break;
    }
    // ctx.response.body = { msg: "请求成功了." };
    /**返回体需要使用text() 方法或者json()方法解析 */
  }
};
