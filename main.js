const playBtn = document.getElementById("playBtn");
const output = document.getElementById("outputText");
const attempt_count = document.getElementById("attempt");
const inputText = document.getElementById("userInput");
let resetBtn = document.getElementById("reset");

const randomNumber = () => (Math.floor(Math.random() * 20) + 1); //output number from 0 to <1

let attempts = 5;

playBtn.addEventListener("click", function () {
    if (attempts === 0) {
        return
    };

    const input = inputText.value;
    const number = randomNumber();
    let winnerCount = 0;

    if (input >= 1 && input <= 20) {
        if (input == number) {
            winnerCount++;
            output.innerHTML = `guessed right! your number was ${number}`;
            attempt_count.innerHTML = `You Win!!`;

            attempt_count.classList.add('success');
            inputText.disabled = true;
            playBtn.disabled = true;
        } else if (input < number) {
            output.innerHTML = `guessed too low!! your number was ${number}`;
        } else if (input > number) {
            output.innerHTML = `guessed too High!! your number was ${number}`;
        }
    } else {
        output.innerHTML = `Out Of range (1-20)!! your number was ${input}`;
    }

    attempts--; //5, 4, 3, 2, 1

    if (attempts !== 0) {
        attempt_count.innerHTML = `"You Have ${attempts} attempts to guess the right number"`;
    } else {
        attempt_count.innerHTML = `Game Over!! You win ${winnerCount} times`;
        attempt_count.classList.add('failed');
        inputText.disabled = true;
        playBtn.disabled = true;
    }

    inputText.value = ""; //refresh input field value
});

resetBtn.addEventListener("click", function () {
    attempts = 5;
    attempt_count.innerHTML = `"You Have ${attempts} attempts to guess the right number"`;
    attempt_count.classList.remove('failed');
    inputText.disabled = false;
    playBtn.disabled = false;
});