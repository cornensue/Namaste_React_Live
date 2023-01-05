const heading2 = React.createElement(
	"h2", 
	{
		id: 'title',
	},
	"Heading 2 inside React.createElement"
);

const heading1 = React.createElement(
	"h1", 
	{
		id: 'title1',
	},
	"Heading 1 inside React.createElement"
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