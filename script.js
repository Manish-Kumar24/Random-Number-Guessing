document.addEventListener("DOMContentLoaded", function() {
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessButton = document.getElementById("guessButton");
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");

    guessButton.addEventListener("click", makeGuess);
    guessInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            makeGuess();
        }
    });

    function makeGuess() {
        const userGuess = parseInt(guessInput.value, 10);
        attempts += 1;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
        } else if (userGuess < numberToGuess) {
            message.textContent = "Too low! Try again.";
        } else if (userGuess > numberToGuess) {
            message.textContent = "Too high! Try again.";
        } else {
            message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        }
    }
});