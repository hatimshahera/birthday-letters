function checkLogin() {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "index.html"; // Redirect if not logged in
    }
}

function countdown(targetTime, timerId, questionContainerId) {
    function updateCountdown() {
        const now = new Date();
        const difference = targetTime - now;

        if (difference <= 0) {
            document.getElementById(timerId).innerHTML = "Unlocked! 🎉";
            document.getElementById(questionContainerId).style.display = "block"; // Show question
            return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById(timerId).innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

function unlockLetter(letterNumber, correctAnswer) {
    const inputId = `q${letterNumber}`;
    const linkId = `link${letterNumber}`;
    const userAnswer = document.getElementById(inputId).value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById(linkId).style.display = "block";

        // Store a version number (change when you update the letter)
        localStorage.setItem(`letter${letterNumber}_unlocked`, "v3");
    } else {
        alert("Try again, my love! 💕");
    }
}

// Ensure login
checkLogin();

// Set unlock times (adjust based on actual hours)
const now = new Date();
const letter1Time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0); // 12:00 AM
const letter2Time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0); // 1:00 AM

// Start countdowns
countdown(letter1Time, "timer1", "q1-container");
countdown(letter2Time, "timer2", "q2-container");
