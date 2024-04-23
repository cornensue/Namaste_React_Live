import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
   const params = useParams();
   const restaurant = useRestaurant(params);

   return (
      <>
         <section className="restaurante-detail">
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
