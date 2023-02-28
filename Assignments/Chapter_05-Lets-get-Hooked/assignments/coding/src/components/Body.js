import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

// filter data funt
function filterData(searchText, restaurants) {
   const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
   );
   return filterData;
}

const Body = () => {
   const [restaurants, setRestaurants] = useState(restaurantList);
   const [searchText, setSearchText] = useState("");
   console.log(restaurants);

   return (
      <>
         <div className="search-form">
            <input
               type="search"
               className="search-input"
               placeholder="Search"
               size="50"
               value={searchText}
               onChange={(e) => {
                  setSearchText(e.target.value);
               }}
            />
            <button
               className="search-btn"
               onClick={() => {
                  // we need filter the data here
                  const data = filterData(searchText, restaurants);
                  // update the state - restaurants
                  setRestaurants(data);
               }}
            >
               Search
            </button>
         </div>
         <div className="restaurant-list">
            {restaurants.map((restaurant) => {
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
