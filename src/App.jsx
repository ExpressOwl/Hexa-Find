import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(false);

  // Math.random() returns a random number between 0-16777215
  // Math.floor() rounds it down to an integer
  // toString(16) converts the number to hexadecimal
  // Add a # before the color and you get a random color everytime.
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  function generateColor() {
    // Generate random color and set it with setColor
    const correctColor = getRandomColor();
    setColor(correctColor);

    // Generate the correctColor along with some random colours
    const randomColors = [correctColor, getRandomColor(), getRandomColor()];

    // Shuffle the answers so that the correct color isn't always first
    const shuffleColors = randomColors.sort(() => Math.random() - 0.5);

    setAnswers(shuffleColors);
  }

  useEffect(() => {
    generateColor();
  }, []);

  function handleAnswer(answer) {
    if (answer === color) {
      setResult(false);
      // If correct, next question
      generateColor();
    } else {
      setResult(true);
    }
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-background bg-cover bg-no-repeat bg-blend-multiply bg-gray-400">
        <div>
          <div
            className="w-60 h-60 m-auto mb-8"
            style={{ background: color }}
          ></div>
          {answers.map((answer) => (
            <button
              onClick={() => handleAnswer(answer)}
              key={answer}
              className="mx-2 p-2 bg-orange-500 mb-4"
            >
              {answer}
            </button>
          ))}
          {result === false && <div className="text-red-500">Wrong Color</div>}
          {result === true && (
            <div className="text-blue-400">Color Wizard!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
