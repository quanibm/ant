window.REQUEST_HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
window.RomateUrl = "http://localhost:3999/dizhi";

const headKey = "x-auth-token";

window.NetWork = {
  Interface: {
    POST: function(postData, cb) {
      fetch(RomateUrl, {
        method: "POST",
        headers: REQUEST_HEADER,
        body: JSON.stringify(postData)
      })
        .then(response => {
          if (response.status === 200) {
            return response.text();
          }
          cb(`网络错误,状态:${response.status}`, null);
        })
        .then(responseText => {
          if (!!responseText) {
            var result = JSON.parse(responseText);
            if (result.header.errorCode == 407) {
              cb(null, result);
            } else {
              cb(null, result);
            }
          } else {
            cb("err", null);
          }
        })
        .catch(err => {
          cb(err.message, null);
        });
    }
  }
};
