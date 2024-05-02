import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

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
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredrestaurants(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   }

   // check online connectivity
   /*  const isOnline = useOnline();

   if (!isOnline) {
      return <h1>🚫 Offline, please check your internet connection!!</h1>;
   } */

   // Conditional Rendering
   // if my restaurant is empty => Shimmer UI
   // if my restaurant has data => actual data UI

   // not render component (Early return)
   if (!allRestaurants) return null;

   return allRestaurants?.length === 0 ? (
      <Shimmer />
   ) : (
      <>
         <div className="my-4 p-5 bg-fuchsia-200 flex gap-2">
            <p>
               <input
                  type="search"
                  className="p-3"
                  placeholder="Search"
                  size="50"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
               />
            </p>
            <p>
               <button
                  className="rounded p-3 bg-fuchsia-300"
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
         <div className="flex flex-wrap justify-center bg-fuchsia-100">
            {filteredrestaurants.map((restaurant) => {
               return (
                  <Link
                     className="m-2"
                     to={"/restaurant/" + restaurant?.info.id}
                     key={restaurant?.info.id}
                  >
                     <RestaurantCard {...restaurant?.info} />
                  </Link>
               );
            })}
         </div>
      </>
   );
};

export default Body;
