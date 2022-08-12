import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postsResponse: null,
		};
	}

	postToApi = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "Hello World",
				body: "It Works",
				userId: 123,
			})
			.then((response) => {
				console.log(response);
				this.setState({
					postsResponse: response.data,
				});
			});
	};

	render() {
		const { postsResponse } = this.state;
		return (
			<div>
				<button onClick={this.postToApi}>Create Posts</button>
				{postsResponse ? (
					<div>
						<h1>{this.state.postsResponse.title}</h1>
						<p>{this.state.postsResponse.body}</p>
					</div>
				) : (
					<p>Click the button!</p>
				)}
			</div>
		);
	}
}

export default HTTPPost;
