import React, { useState } from "react";

function ControlledFormHooks() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("website");
	const [comments, setComments] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, category, comments);
	};

	return (
		<div>
			<h2>Please fill out the form bellow:</h2>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="id-name">Your Name:</label>
					<input
						onChange={(e) => setName(e.target.value)}
						value={name}
						id="id-name"
						name="name"
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="id-category">Your Name:</label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						id="category"
						name="category">
						<option value="website">Website issue</option>
						<option value="order">Order issue</option>
						<option value="general">General issue</option>
					</select>
				</div>
				<div>
					<label htmlFor="id-comments">Comments:</label>
					<textarea
						onChange={(e) => setComments(e.target.value)}
						value={comments}
						name="id-comments"
						id="id-comments"
						cols="30"
						rows="10"
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default ControlledFormHooks;
