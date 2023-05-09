import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);

  // Math.random() returns a random number between 0-16777215
  // Math.floor() rounds it down to an integer
  // toString(16) converts the number to hexadecimal
  // Add a # before the color and you get a random color everytime.
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  useEffect(() => {
    // Generate random color and set it with setColor
    const correctColor = getRandomColor();
    setColor(getRandomColor());

    // Generate the correctColor along with some random colours
    const randomColors = [correctColor, getRandomColor(), getRandomColor()];

    // Shuffle the answers so that the correct color isn't always first
    const shuffleColors = randomColors.sort(() => Math.random() - 0.5);

    setAnswers(shuffleColors);
  }, []);

  function handleAnswer(answer) {
    if (answer === color) {
      // Blah blah
    } else {
      // Wrong
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <div className="w-60 h-60 m-auto mb-8" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button
          onClick={handleAnswer(answer)}
          key={answer}
          className="mx-2 p-2"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
