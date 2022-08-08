import "./App.css";

// import FunctionGreetingWithProps from "./components/FunctionalGreetingWithProps";
// import StatefulGreeting from "./components/StatefulGreeting";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";

function App() {
	return (
		<div className="App">
			<EventsClass />
			<EventsFunctional />
		</div>
	);
}

export default App;
