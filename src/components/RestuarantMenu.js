import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useRestuarantMenu from "../utils/useRestuarantMenu";
const RestuarantMenu = () => {
  const { id } = useParams();
  const menu= useRestuarantMenu(id);
  function custom(msg) {
    return console.log(msg);
  }
custom("inn")
  const resName = menu?.data?.cards[0]?.card?.card?.info?.name;
  const avg = menu?.data?.cards[0]?.card?.card?.info?.avgRatingString;
  const cuisine = menu?.data?.cards[0]?.card?.card?.info?.cuisines;
  const totalRatingsString =
    menu?.data?.cards[0]?.card?.card?.info?.totalRatingsString;

  return (
    <div className="flex justify-between items-center max-w-5xl mt-20 mx-auto mb-0">
      <div>
        <h1 className="font-bold text-lg"> {resName}</h1>
        <p>{cuisine?.join(",")}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">{avg}</h1>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestuarantMenu;
