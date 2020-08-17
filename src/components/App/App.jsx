import React from 'react';
import Home from 'pages/Home';
import { Helmet } from 'react-helmet';

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Portfolio</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;900&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<Home />
		</div>
	);
}

export default App;
