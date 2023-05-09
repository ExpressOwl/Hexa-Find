import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
  };

  useEffect(() => {
    // Generate random color
    setColor("#FF00DD");
  }, []);

  return (
    <div className="App">
      <div className="guess-me" style={{ background: color }}></div>
    </div>
  );
}

export default App;
