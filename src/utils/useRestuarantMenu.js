import React, { useEffect, useState } from "react";
import { RES_API } from "./constants";
const useRestuarantMenu = (id) => {
    console.log("herree",id)
  const [menu, setMenu] = useState([]);
  const fetchData = async () => {
    const result = await fetch(`${RES_API}${id}`);
    const res = await result.json();
    setMenu(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("menuuu",menu)
  return menu;
};

export default useRestuarantMenu;
