# Hexa Find

Hexafind is a React application where users are shown three colors and have to click on the correct hexadecimal color code. It is a simple game to test the user's color recognition skills.

# How it works

The application generates a random color using the getRandomColor function, which generates a hexadecimal color code. The generated color is set as the correct color and displayed as a background color on a circular element.

Three answer buttons are rendered, each representing a random color. The correct color is among these options, but the order is shuffled using Math.random() because otherwise the answer will always be first in the array.

When a user clicks on an answer button, the handleAnswer function is called. It checks if the selected answer matches the correct color. If it does, the user is notified that their answer was correct and the next question is generated after a short delay. If the answer is incorrect, the user is notified and a new question is generated after a longer delay.

The game continues with new color challenges until the user decides to stop playing.

# Dependencies

- React: A JavaScript library for building user interfaces.

- Tailwind CSS: Utility-first CSS framework for styling the components.

- npm: A package manager for installing and managing project dependencies.
