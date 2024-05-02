import logo from "../../img/logo_.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
   <a href="/">
      <img className="w-[100px] rounded p-2 ml-10" alt="our logo" src={logo} />
   </a>
);

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const isOnline = useOnline();

   return (
      <section className="flex justify-between w-full bg-fuchsia-700">
         <Title />
         <nav className="flex justify-between">
            <ul className="flex gap-8 py-6 tracking-widest text-cyan-300">
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
               <Link to="/instamart">
                  <li>Instamart</li>
               </Link>
            </ul>
         </nav>
         <section>
            <p>{isOnline ? "✅" : "⛔"}</p>
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
