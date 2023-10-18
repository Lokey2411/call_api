import React, { useState, useEffect } from "react";
import got from "got";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await got("https://jsonplaceholder.typicode.com/todos/1", { json: true });
				setData(response.body);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{data ? (
				<div>
					<h1>Dữ liệu từ API:</h1>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</div>
			) : (
				<p>Đang tải dữ liệu...</p>
			)}
		</div>
	);
}

export default App;
