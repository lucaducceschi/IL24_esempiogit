import React, { useState } from "react";
import axios from "axios";

function App() {
  const [sentence, setSentence] = useState("");
  const [tokens, setTokens] = useState([]);
  const [error, setError] = useState("");

  const handleTokenize = async () => {
    try {
      setError(""); // Clear previous errors
      const response = await axios.post("http://127.0.0.1:5000/tokenize", {
        sentence: sentence,
      });
      setTokens(response.data.tokens);
    } catch (err) {
      console.error(err);
      setError("Failed to tokenize sentence.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sentence Tokenizer</h1>
      <textarea
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter your sentence here..."
      />
      <br />
      <button onClick={handleTokenize} style={{ marginTop: "10px" }}>
        Tokenize
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Tokens:</h2>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>{token}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
