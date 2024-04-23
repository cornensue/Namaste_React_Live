import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (params) => {
   const [restaurant, setRestaurant] = useState({});

   useEffect(() => {
      getRestaurantInfo();
   }, []);

   async function getRestaurantInfo() {
      const data = await fetch(FETCH_MENU_URL + params?.id);
      const json = await data.json();
      setRestaurant(json?.data?.cards[2]?.card?.card?.info);
      console.log(json);
   }
   // return restaurant data
   return restaurant;
};

export default useRestaurant;
