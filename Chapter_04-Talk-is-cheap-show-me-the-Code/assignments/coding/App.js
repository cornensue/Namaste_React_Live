import ReactDOM, {createRoot} from 'react-dom/client';

const Header = () => {
	return (
		<>
			<article className='container'>
				<header id='header1'>
					<p>Logo</p>
					<input type="text" placeholder="Namaste search"></input>
					<p>My User 🧑‍🦱</p>
			 	</header>
			</article>

		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(<Header/>);