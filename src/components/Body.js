import React, { useState, useEffect } from "react";
import Rest from "../utils/MockData";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
const Body = () => {
  const [state, setstate] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const Search = () => {
    setSearchText(" ");
    const NewSearch = state.filter((val) =>
      val?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    setFiltered(NewSearch);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(state)
  const fetchData = async () => {
    const fetched = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
    );
    const result = await fetched.json();
    setFiltered(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setstate(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      {state?.length > 0 ? (
        <div className=" p-10">
          <div className="py-2 px-5 flex items-center justify-start
          ">
            <div>
            <input
              className="border py-3 px-5"
              placeholder="Search.."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="top_rated py-3 px-6 bg-yellow-500 text-white" onClick={Search}>
              Search
            </button>
            </div>
            <div>
            <button
              className="px-5 bg-yellow-500 text-white py-3 mx-5"
              onClick={() => {
                const filteredList = state?.filter(
                  (val) => val.info.avgRating > 4.3
                );
                setFiltered(filteredList);
                console.log("filteredList", filteredList);
              }}
            >
              Top Rated Restuarants
            </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {filtered?.map((val, ind) => (
              <Cards data={val} key={val.info.cloudinaryImageId} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex p-12" >
        <Shimmer/>
        </div> )}
      
    </>
  );
};

export default Body;
