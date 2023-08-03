import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
   const params = useParams();
   const [restaurant, setRestaurant] = useState({});
   console.log(params);

   useEffect(() => {
      getRestaurantInfo();
   }, []);

   async function getRestaurantInfo() {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(
         json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );

      setRestaurant(json?.data);
      console.log(restaurant);
   }

   return (
      <>
         <h1>Restaurant id: {params.id} </h1>
         <h2>{params.id}</h2>
      </>
   );
};

export default RestaurantMenu;
