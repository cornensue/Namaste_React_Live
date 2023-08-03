import logo from "../../img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
   <a href="/">
      <img className="logo" alt="our logo" src={logo} />
   </a>
);

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <section className="header">
         <Title />
         <nav className="nav-items">
            <ul>
               <Link to="/">
                  <li>Home</li>
               </Link>
               <Link to="/about">
                  <li>About</li>
               </Link>
               <Link to="/contact">
                  <li>Contact</li>
               </Link>
               <Link to="/cart">
                  <li>Cart</li>
               </Link>
            </ul>
         </nav>
         <section>
            {isLoggedIn ? (
               <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
         </section>
      </section>
   );
};

export default Header;
