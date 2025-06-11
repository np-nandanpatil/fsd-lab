import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "clr", "0", "="];

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setResult(eval(input).toString());
        setInput("");
      } catch {
        setResult("Error");
        setInput("");
      }
    } else if (val === "clr") {
      setInput("");
      setResult("");
    } else {
      setInput(input + val);
    }
  };

  const styles = {
    container: {
      width: "220px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    },
    inputBox: {
      width: "100%",
      height: "30px",
      marginBottom: "10px",
      textAlign: "right",
      fontSize: "16px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px"
    },
    button: {
      padding: "15px",
      fontSize: "16px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <h2>My Calculator</h2>
      <input style={styles.inputBox} readOnly value={input} />
      <input style={styles.inputBox} readOnly value={result} />
      <div style={styles.grid}>
        {buttons.map((val) => (
          <button key={val} style={styles.button} onClick={() => handleClick(val)}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
