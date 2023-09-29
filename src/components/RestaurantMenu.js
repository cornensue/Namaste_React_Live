import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";

const RestaurantMenu = () => {
   const params = useParams();
   const [restaurant, setRestaurant] = useState({});

   useEffect(() => {
      getRestaurantInfo();
   }, []);

   async function getRestaurantInfo() {
      const data = await fetch(
         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
            params?.id
      );
      const json = await data.json();
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
   }
   return (
      <>
         <section className="restaurante-detail">
            <h1>{restaurant.name}</h1>
            <img src={IMG_CON_URL + restaurant.cloudinaryImageId} />
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
         </section>
      </>
   );
};

export default RestaurantMenu;
