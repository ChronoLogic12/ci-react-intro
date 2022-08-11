import React, { Component } from "react";

export class ControlledForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			category: "website",
			comments: "",
		};
	}

	handleNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleCommentsChange = (event) => {
		this.setState({
			comments: event.target.value,
		});
	};

	handleCategoryChange = (event) => {
		this.setState({
			category: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<h2>Please fill out the form bellow:</h2>
				<form action="" onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="id-name">Your Name:</label>
						<input
							onChange={this.handleNameChange}
							value={this.state.name}
							id="id-name"
							name="name"
							type="text"
						/>
					</div>
					<div>
						<label htmlFor="id-category">Your Name:</label>
						<select
							value={this.state.category}
							onChange={this.handleCategoryChange}
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
							onChange={this.handleCommentsChange}
							value={this.state.comments}
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
}

export default ControlledForm;
