import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err=useRouteError()
  return (
    <div style={{background:"red",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <h1>Something went wrong</h1>
        <h2>{err.status}</h2>
    </div>
  )
}

export default Error