import React, { Component } from "react";

export class UncontrolledForm extends Component {
	constructor(props) {
		super(props);
		this.inputName = React.createRef();
		this.inputCategory = React.createRef();
		this.inputComments = React.createRef();
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(
			this.inputName.current.value,
			this.inputCategory.current.value,
			this.inputComments.current.value
		);
	};

	render() {
		return (
			<div>
				<h2>Please fill out the form bellow:</h2>
				<form action="" onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="id-name">Your Name:</label>
						<input ref={this.inputName} id="id-name" name="name" type="text" />
					</div>
					<div>
						<label htmlFor="id-category">Your Name:</label>
						<select ref={this.inputCategory} id="category" name="category">
							<option value="website">Website issue</option>
							<option value="order">Order issue</option>
							<option value="general">General issue</option>
						</select>
					</div>
					<div>
						<label htmlFor="id-comments">Comments:</label>
						<textarea
							ref={this.inputComments}
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

export default UncontrolledForm;
