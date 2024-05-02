import { IMG_CON_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
   return (
      <div className="card w-64 p-2">
         <img
            className="image-card w-full rounded-lg"
            alt="restaurant card"
            src={IMG_CON_URL + cloudinaryImageId}
         />
         <h2 className="font-bold text-2xl">{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4>{avgRating} stars</h4>
      </div>
   );
};

export default RestaurantCard;
