import React,{useEffect,useState} from 'react'

const useNetwork = () => {
 const [status,setStatus]=useState(null)
 useEffect(() => {
    window.addEventListener("online", (event) => {
        setStatus(false)
      });
      window.addEventListener("offline", (event) => {
        setStatus(true)
      });
      
 }, [])
 return status;
}

export default useNetwork