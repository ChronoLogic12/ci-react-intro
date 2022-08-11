import React, { Component } from "react";
import names from "../names";

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			names: names,
		};
	}

	handleChange = (event) => {
		const inputText = event.target.value.toLowerCase();
		const filteredNames = names.filter((name) => {
			return name.toLowerCase().includes(inputText);
		});

		this.setState({
			names: filteredNames,
		});
	};

	render() {
		return (
			<>
				<h1>Name Search</h1>
				<p>matching names found: {this.state.names.length}</p>
				<form action="">
					<label htmlFor="search"></label>
					<input
						onChange={(event) => this.handleChange(event)}
						placeholder="search names..."
						name="search"
						id="search"
						type="text"
					/>
				</form>
				<div>
					{this.state.names.map((name) => {
						return <p key={name}>{name}</p>;
					})}
				</div>
			</>
		);
	}
}

export default SearchBar;
