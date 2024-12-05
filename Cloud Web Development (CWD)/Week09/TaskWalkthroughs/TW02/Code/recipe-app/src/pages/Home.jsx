import { useState } from "react";

function Home () {
    const [user, setUser] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            {!loggedIn ? (
                <>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        onChange={(e) => setUser(e.target.value)} 
                    />
                    <button 
                        onClick={() => user && setLoggedIn(true)}>
                        Login
                    </button>
                </>
            ) : (
                <>
                    <h1>Welcome, {user}!</h1>
                    <button onClick={() => setLoggedIn(false)}>Logout</button>
                </>
            )}
        </div>
    );
}

export default Home;