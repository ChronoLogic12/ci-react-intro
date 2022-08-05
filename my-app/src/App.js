import "./App.css";

import FunctionGreetingWithProps from "./components/FunctionalGreetingWithProps";

function App() {
	return (
		<div className="App">
			<FunctionGreetingWithProps greeting="Nice to meet you" name="Mike" age="32" />
		</div>
	);
}

export default App;
