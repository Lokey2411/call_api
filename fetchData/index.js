fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

// const request = require("request-promise-native");

// URL bạn muốn gọi
const request = require("request-promise-native");

// URL bạn muốn gọi
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Thực hiện yêu cầu GET
request(url)
  .then((response) => {
    // Xử lý dữ liệu ở đây
    console.log("Response:", response);
  })
  .catch((error) => {
    // Xử lý lỗi nếu có
    console.error("Error:", error);
  });
