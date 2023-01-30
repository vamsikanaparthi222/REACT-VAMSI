//import React from "react";

import React from "react"

function Messageletfun(){
    //let[user,setUser] = React.useState([1,2,3,4,5])
    let[msg,setMsg] =React.useState("Hello")

    return <>
    
    <h2>{msg}</h2>
    <button onClick={()=>{setMsg("Hello,complete the program")}}>fun</button>
    </>
}
export default Messageletfun