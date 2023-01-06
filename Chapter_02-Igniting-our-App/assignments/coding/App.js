import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
	"h1", 
	{
		id: 'title1',
	},
	"Assignments - Igniting our App"
);

const container = React.createElement(
	"div", 
	{
		id: 'container',
	},
	[heading1]
);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(container);