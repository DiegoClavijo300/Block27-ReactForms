import { useState } from "react";

export default function Authenticate({token}) {
    const [sucessMessage, setSucessMessage] = useState(null);
    const [error,setError] = useState(null);

   async function handleClick(){
      try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log("authenticate: ",result)
        setSucessMessage(result.message);
        console.log(result.data)
      }catch(error){
        setError(error.message)
      }
    }
    
    return(
        <div>
            <h2>Authenticate</h2>
            {sucessMessage && <p>{sucessMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate</button>
        </div>
    )  }