import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  // Math.random() returns a random number between 0-16777215
  // Math.floor() rounds it down to an integer
  // toString(16) converts the number to hexadecimal
  // Add a # before the color and you get a random color everytime.
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  useEffect(() => {
    // Generate random color
    setColor(getRandomColor());
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-60 h-60 m-auto" style={{ background: color }}></div>
      <span></span>
    </div>
  );
}

export default App;
