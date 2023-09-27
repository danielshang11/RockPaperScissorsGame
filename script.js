let userWins = 0;
let ties = 0;
let computerWins = 0;

document.getElementById("playButton").addEventListener("click", playGame);

function playGame() {
    let userChoice = prompt("Choose R, P, or S:").toUpperCase();

    // Validate user input
    while (userChoice !== 'R' && userChoice !== 'P' && userChoice !== 'S') {
        alert("Invalid choice. Please choose R, P, or S.");
        userChoice = prompt("Choose R, P, or S:").toUpperCase();
    }

    const computerChoice = computerPlay();

    if (userChoice === computerChoice) {
        ties++;
        alert("It's a tie!");
    } else if ((userChoice === 'R' && computerChoice === 'S') ||
               (userChoice === 'P' && computerChoice === 'R') ||
               (userChoice === 'S' && computerChoice === 'P')) {
        userWins++;
        alert(`You win! Computer chose ${computerChoice}.`);
    } else {
        computerWins++;
        alert(`Computer wins! Computer chose ${computerChoice}.`);
    }

    updateScore();

    setTimeout(function () {
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            playGame();
        } else {
            alert("Thanks for playing!");
        }
    }, 500); // Delay the prompt for half a second (500 milliseconds)
}

function computerPlay() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore() {
    document.getElementById('wins').textContent = userWins;
    document.getElementById('ties').textContent = ties;
    document.getElementById('losses').textContent = computerWins;
}