function countdown(targetTime, elementId) {
    function updateCountdown() {
        const now = new Date();
        const difference = targetTime - now;

        if (difference <= 0) {
            document.getElementById(elementId).innerHTML = "Letter Available! 🎉";
            return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Example: Countdown for Letter 2 (Available at 1:00 AM)
const letter2Time = new Date();
letter2Time.setHours(1, 0, 0, 0); // Set release time to 1:00 AM

countdown(letter2Time, "countdown-timer");
