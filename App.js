import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const heading = (
	<h1 id='title2' key="h2">
		Namaste JSX
	</h1>
);

// React Component
// -> Functional - NEW
const HeaderComponent = () => {
	return (
		<div>
			{heading}
			<h2>Namaste React Functional Component</h2>
			<h3>This is a h2 tag</h3>
		</div>
	)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(HeaderComponent());