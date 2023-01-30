//import React from "react";

import React from "react"

function Messageletfun(){
    let[user,setUser] = React.useState([1,2,3,4,5])
    
    let gmHandler = () =>{
        setUser([6,7,8,9,10])
    }
    return <>
    <h1>{user}</h1>
   
    <button onClick={gmHandler}>fun</button>
    </>
}
export default Messageletfun
