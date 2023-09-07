import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

// filter data funt
function filterData(searchText, restaurants) {
   const filterDa = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   );
   return filterDa;
}

const Body = () => {
   const [allRestaurants, setAllRestaurants] = useState([]);
   const [filteredrestaurants, setFilteredrestaurants] = useState([]);
   const [searchText, setSearchText] = useState("");

   useEffect(() => {
      // API call
      getRestaurants();
   }, []);

   async function getRestaurants() {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Optional Chaining
      setAllRestaurants(
         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredrestaurants(
         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   }
   //console.log(allRestaurants[0]?.info?.cuisines);
   // Conditional Rendering
   // if my restaurant is empty => Shimmer UI
   // if my restaurant has data => actual data UI

   // not render component (Early return)
   if (!allRestaurants) return null;

   return allRestaurants?.length === 0 ? (
      <Shimmer />
   ) : (
      <>
         <div className="search-form">
            <p>
               <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  size="50"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
               />
            </p>
            <p>
               <button
                  className="search-btn"
                  onClick={() => {
                     // we need filter the data here
                     const data = filterData(searchText, allRestaurants);
                     // update the state - restaurants
                     setFilteredrestaurants(data);
                  }}
               >
                  Search
               </button>
            </p>
         </div>
         <div className="restaurant-list">
            {filteredrestaurants.map((restaurant) => {
               return (
                  <RestaurantCard
                     {...restaurant?.info}
                     key={restaurant?.info.id}
                  />
               );
            })}
         </div>
      </>
   );
};

export default Body;
