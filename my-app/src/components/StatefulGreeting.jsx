import React from "react";

class StatefulGreeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit",
			count: 0,
		};
	}

	handleClick = () => {
		this.setState((prevState, prevProps) => {
			return {
				introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
				buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
				count: (prevState.count += 1),
			};
		});
	};

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.greeting}. Welcome {this.props.name}
				</h1>
				<button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
				<p>You have clicked {this.state.count} number of times!</p>
			</div>
		);
	}
}

export default StatefulGreeting;
