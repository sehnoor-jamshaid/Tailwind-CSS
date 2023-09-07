import React,{useState} from "react";
import { ReactDOM } from "react";
import Logo from "../../images/Logo.png"
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
const Header = () => {
 const [headerStatus, setHeaderStatus] = useState("Login")
 const status=useNetwork()
 const clickonLogin=()=>
 {
  setHeaderStatus(headerStatus=="Login"?"Logout":"Login")
 }
    return (
      <div className=" flex justify-between px-5  bg-slate-700 shadow-md">
        <div className="logo_container">
          <img src={Logo} alt="logo" className="w-24" />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex px-5 items-center font-bold text-white">
          <li className="px-3">
            Online Status:{!status ? "✅" :"🔴"}
            </li>
            <li className="px-3 fon">
             <Link to="/">Home</Link>
            </li>
            <li className="px-3">
               <Link to="/about-us">About Us</Link>
            </li>
            <li className="px-3">
               <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="px-3">
               <Link to="/">Careers</Link>
            </li>
          <button className="bg-yellow-500 px-6 py-2" onClick={clickonLogin}>{headerStatus}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;