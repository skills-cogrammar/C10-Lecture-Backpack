import React, { useState, useEffect, useRef } from "react";

function App() {
    const [number, setNumber] = useState("");
    const [trivia, setTrivia] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const fetchTrivia = async () => {
        if (number) {
            setTrivia("Loading...");
            try {
                const response = await fetch(`http://numbersapi.com/${number}`);
                const data = await response.text();
                setTrivia(data);
            } catch (error) {
                setTrivia("Error fetching trivia. Please try again.");
            }
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Fun Trivia Fetcher</h1>
            <input
                type="number"
                placeholder="Enter your favorite number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                ref={inputRef}
            />
            <button onClick={fetchTrivia}>Get Trivia</button>
            <div style={{ marginTop: "20px", fontSize: "18px" }}>
                {trivia && <p>{trivia}</p>}
            </div>
        </div>
    );
}

export default App;