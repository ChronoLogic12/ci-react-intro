import React, { Component } from "react";
import MethodsAsPropsChild from "./MethodsAsPropsChild";

class MethodsAsPropsParent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: true,
		};
	}

	authenticationToggle = () => {
		this.setState((prevState) => ({
			isLoggedIn: !prevState.isLoggedIn,
		}));
	};

	render() {
		return (
			<div>
				<MethodsAsPropsChild
					isLoggedIn={this.state.isLoggedIn}
					authenticationToggle={this.authenticationToggle}
				/>
			</div>
		);
	}
}

export default MethodsAsPropsParent;
