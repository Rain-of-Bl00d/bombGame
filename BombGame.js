let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let counter = 10;
let uniqueId = null;

uniqueId = setInterval(function() {
    timer.textContent = counter;
    counter -= 1; // Decrement the counter

    if (counter < 0) {
        clearInterval(uniqueId); // Clear the interval when the counter reaches 0
        timer.textContent = "BooM💥";
    }
}, 1000);

function defuse(event) {
    if (event.key === "Enter" && defuser.value === "defuse" && counter !== 0) {
        timer.textContent = "You did it!";
        clearInterval(uniqueId); // Clear the interval correctly
    }
}

defuser.addEventListener("keydown", defuse);
