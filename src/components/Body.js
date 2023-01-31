import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const Body = () => {
   const [searchInput, setSearchInput] = useState("KFC");
   console.log(searchInput);
   return (
      <>
         <form className="search-form">
            <p>
               <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  size="50"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
               />
            </p>
            <p>
               <button className="search-btn">Search</button>
            </p>
         </form>
         <div className="restaurant-list">
            {restaurantList.map((restaurant) => {
               return (
                  <RestaurantCard
                     {...restaurant.data}
                     key={restaurant.data.id}
                  />
               );
            })}
         </div>
      </>
   );
};

export default Body;
