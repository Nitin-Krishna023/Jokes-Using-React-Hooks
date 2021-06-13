import React, { useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div class="joke" id="joke">
        {joke}
      </div>
      <button class="btn" id="jokeBtn" onClick={getJoke}>
        Get Another Joke
      </button>
    </div>
  );
}
