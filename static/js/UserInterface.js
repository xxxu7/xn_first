class UserInterface {
    static register() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // 发送注册请求到后端
        // 这里可以使用 Ajax 或 Fetch 方法发送请求
        // 例如：fetch('/register', { method: 'POST', body: JSON.stringify({ username, password }) })
        //       .then(response => response.json())
        //       .then(data => console.log(data));
    }

    static login() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        // 发送登录请求到后端
        // 这里可以使用 Ajax 或 Fetch 方法发送请求
        // 例如：fetch('/login', { method: 'POST', body: JSON.stringify({ username, password }) })
        //       .then(response => response.json())
        //       .then(data => console.log(data));
    }
}