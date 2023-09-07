import React from "react";
import { IMAGE_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  console.log("data", data);
  const { avgRatingString, name, costForTwo, cuisines, cloudinaryImageId,id } =
    data.info;
  console.log(avgRatingString, name, costForTwo, cuisines, cloudinaryImageId);
  return (
    <Link to={`restuarant/${id}`}>
      {" "}
      <div className="w-60 mx-5 p-5 flex justify-center flex-col  my-5 bg-white shadow-md hover:border">
        <div className="flex items-center justify-center h-auto w-100 object-cover">
          <img
            alt="card"
            src={IMAGE_CDN + cloudinaryImageId}
            className="w-52 h-40"
          />
        </div>
        <div className="py-2 font-bold">
          <h3>{name}</h3>
        </div>
        <div className="py-2">
          <p>{avgRatingString}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
