import { useState } from "react";


export default function SignUpForm({setToken}) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
                method: "POST",
                data: JSON.stringify({username,password})
            })
            const data = await response.json();
            console.log(data);
            setToken(data.token)
       }catch(error){
            setError(error.message)
       }
      }
    return <div>
                <h2> Sign Up! </h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:{""} 
                        <input
                         value={username} 
                         onChange={(e) => setUsername(e.target.value)} 
                         minLength={8}
                         required
                         />
                    </label>
                    <label>
                        Password:{""} 
                        <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        minLength={8}
                        required
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
    ;
  }
