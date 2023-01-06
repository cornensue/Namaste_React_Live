import React from 'react';
import ReactDOM from 'react-dom/client';

const heading2 = React.createElement(
	"h2", 
	{
		id: 'title',
	},
	"Heading 2 from Parcel"
);

const heading1 = React.createElement(
	"h1", 
	{
		id: 'title1',
	},
	"Heading 1 from Parcel"
);

const container = React.createElement(
	"div", 
	{
		id: 'container',
	},
	[heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(container);