import logo from "../../img/logo.png";
import { useState } from "react";

const Title = () => (
   <a href="/">
      <img className="logo" alt="our logo" src={logo} />
   </a>
);

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <div className="header">
         <Title />
         <nav className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li>Cart</li>
            </ul>
         </nav>
         <section>
            {isLoggedIn ? (
               <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
         </section>
      </div>
   );
};

export default Header;
