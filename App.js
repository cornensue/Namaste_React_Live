import ReactDOM, {createRoot} from 'react-dom/client';

const Title = () => (
	<h1 id='title2' key="h2">
		Namaste JSX
	</h1>
);

// Composing Components
const HeaderComponent = () => {
	return (
		<div>
		{<Title />}
			<h2>Namaste React Functional Component</h2>
			<h3>This is a h2 tag</h3>
		</div>
	)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(<HeaderComponent />);