// Đầu tiên, bạn cần cài đặt thư viện axios bằng npm
// npm install axios

import { get } from "axios";

get("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => {
		// Khi yêu cầu thành công, dữ liệu trả về sẽ nằm trong response.data
		console.log(response.data);
	})
	.catch((error) => {
		// Khi có lỗi xảy ra, thông tin lỗi sẽ nằm trong error
		console.error("Error:", error);
	});
