const h1One = document.getElementById("h1One");
const input1 = document.getElementById("input1");
const subBtn = document.getElementById("subBtn");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(`Answer: ${answer}`);

let attempts = 0;
let running = true;
let player = window.prompt("Enter your name:");

input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        subBtn.click(); // Triggers the same action as clicking the button
    }
});

h1One.textContent = `Game Running By ${player}`;
input1.focus();

window.alert(`Guess a number between ${minNum} - ${maxNum}`);

subBtn.onclick = function () {
    if (!running) return;

    let guess = Number(input1.value);
    input1.value = "";

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        return;
    }

    if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} - ${maxNum}.`);
        return;
    }

    attempts++;

    if (guess < answer) {
        window.alert("Too low! Try again.");
    } 
    else if (guess > answer) {
        window.alert("Too high! Try again.");
    }
    else {
        window.alert(`Correct, ${player}! You have won!`);
        window.alert(`The answer was ${answer}. It took you ${attempts} attempts.`);
        window.alert("The game has ended.");
        h1One.textContent = `${player} has won! 🎉`;
        running = false;
        input1.disabled = true;
        subBtn.disabled = true;
    }
};