import React, { Component } from "react";
import request from "superagent";

class App extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		// Thực hiện yêu cầu GET đến một API bất kỳ
		request
			.get("https://jsonplaceholder.typicode.com/users") // Thay thế URL bằng API thực tế
			.end((err, res) => {
				if (err) {
					console.error(err);
				} else {
					this.setState({ data: res.body });
				}
			});
	}

	render() {
		return (
			<div>
				<h1>Superagent React App</h1>
				<ul>
					{this.state.data.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
