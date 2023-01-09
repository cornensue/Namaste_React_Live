import ReactDOM, {createRoot} from 'react-dom/client';
/*
	Header
		- Logo
		- Nav Items(Right side)
		Car
	Body
		- Search bar
		- Restaurant list
			- RestaurantCard
				- Image
				- Name
				- Rating
				- Cusines
	Footer
		- Links
*/
const Title = () => (
	<a href='/'>
		<img className="logo" alt="our logo" src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
		/>
	</a>
);

// Composing Components
const HeaderComponent = () => {
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
};

const Header = () => {
	return (
		<h1>Header here</h1>
	);
};

const Body = () => {
	return (
		<h1>Body</h1>
	);
};

const Footer = () => {
	return (
		<h1>Footer</h1>
	);
};

const AppLayout = () => {
	return (
		<>
			<Header/>
			<Body/>
			<Footer/>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside root
// async defer
root.render(<HeaderComponent />);