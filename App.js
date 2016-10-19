import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return <h1>Hello World</h1>
		// return React.createElement('h1', null, 'Hello G!')
	}
}

// const App = () => <h1>Hello Eggheads </h1>

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
// 	txt: 'this is the default text'
// }
//
// ReactDOM.render(
// 	<App cat={5} />,
// 	document.getElementById('app')
// );

export default App
