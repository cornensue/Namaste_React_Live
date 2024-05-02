import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
   const params = useParams();
   const restaurant = useRestaurant(params);

   return (
      <>
         <section className=" m-4 restaurante-detail w-3/12 rounded object-contain shadow-slate-200">
            <img
               className="rounde-2"
               src={IMG_CON_URL + restaurant.cloudinaryImageId}
            />
            <h2 className="font-bold text-2xl">{restaurant.areaName}</h2>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
         </section>
      </>
   );
};

export default RestaurantMenu;
