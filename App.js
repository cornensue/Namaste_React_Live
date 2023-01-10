import ReactDOM, { createRoot } from "react-dom/client";
/*
	Header
		- Logo (Title)
		- Nav Items( Right side)
		Car
	Body
		- Search bar
		- Restaurant list
			- RestaurantCard (mnay cards)
				- Image
				- Name
				- Rating
				- Cusines
	Footer
		- Links
*/
const Title = () => (
   <a href="/">
      <img
         className="logo"
         alt="our logo"
         src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
   </a>
);

// Composing Components
const Header = () => {
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
   );
};

const bugerKing = {
   name: "Burger King",
   image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk",
   cusines: ["Burger", "American"],
   rating: "4.2",
};

const RestaurantCard = () => {
   return (
      <div className="card">
         <img
            className="image-card"
            alt="restaurant card"
            src={bugerKing.image}
         />
         <h2>{bugerKing.name}</h2>
         <h3>{bugerKing.cusines}</h3>
         <h4>{bugerKing.rating} stars</h4>
      </div>
   );
};

const Body = () => {
   return (
      <div>
         <RestaurantCard />
      </div>
   );
};

const Footer = () => {
   return <h3>Footer</h3>;
};

const AppLayout = () => {
   return (
      <>
         <Header />
         <Body />
         <Footer />
      </>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside root
// async defer
root.render(<AppLayout />);
