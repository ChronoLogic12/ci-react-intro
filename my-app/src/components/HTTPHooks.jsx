import React, { useEffect, useState } from "react";
import axios from "axios";

function HTTPHooks() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [postResponse, setPostResponse] = useState(null);
	const postToApi = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "Hello World",
				body: "It Works",
				userId: 123,
			})
			.then((response) => {
				console.log(response);
				setPostResponse(
					response.status === 201 ? `Success! Title ${response.data.title}` : "Post request failed!"
				);
			});
	};

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				const data = Array.isArray(response.data) ? response.data : [response.data];
				setPosts(data);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	return (
		<div>
			<button onClick={postToApi}>Create Posts</button>
			<p>{postResponse}</p>
			<h2>Posts:</h2>
			{posts.length ? (
				posts.map((post) => (
					<div key={post.id}>
						<h2>
							{post.id}. {posts.title}
						</h2>
						<h4>By User ID {post.userId}</h4>
						<p>{post.body}</p>
						<hr />
					</div>
				))
			) : error ? (
				<p>{error}</p>
			) : (
				<h4>Loading Posts...</h4>
			)}
		</div>
	);
}

export default HTTPHooks;
