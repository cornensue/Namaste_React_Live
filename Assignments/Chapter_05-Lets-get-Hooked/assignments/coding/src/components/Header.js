import logo from "../../img/logo.png";

const Title = () => (
   <a href="/">
      <img className="logo" alt="our logo" src={logo} />
   </a>
);

const Header = () => {
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
      </div>
   );
};

export default Header;
