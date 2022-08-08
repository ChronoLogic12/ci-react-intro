import "./App.css";

// import FunctionGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
	return (
		<div className="App">
			{/* <FunctionGreetingWithProps greeting="Nice to meet you" name="Mike" age="32" /> */}
			<StatefulGreeting greeting="I'm a stateful class component" name="Matt" />
		</div>
	);
}

export default App;
