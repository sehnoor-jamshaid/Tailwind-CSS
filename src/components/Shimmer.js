import React from "react";

const Shimmer=()=>
{ console.log("Simmer")
return (
   <div className="flex justify-evenly">
   {[1,2,3,4].map((val,ind)=>
    (
        <div className="p-12  bg-slate-100 w-60 shadow-md mx-6 transition-opacity duration-500 ease-in-out  " key={ind}>
        <div className="p-4">
          {/* <img alt="card" src={IMAGE_CDN+cloudinaryImageId} className="image" /> */}
        </div>
        <div className="p-4">
        
        </div>
        <div className="p-8">
          
        </div>
      </div>
    )) }
    </div>
)
}
export default Shimmer;