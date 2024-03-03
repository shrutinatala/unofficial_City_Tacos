document.addEventListener('DOMContentLoaded', function() {
    var statusElement = document.getElementById('status');
    var now = new Date();
    var currentUTCHour = now.getUTCHours();
    var currentPSTHour = (currentUTCHour - 8 + 24) % 24; // Adjusting for PST

    if (currentPSTHour >= 11 && currentPSTHour < 22) {
        statusElement.textContent = "open 🥳";
        statusElement.style.color = "#6c90a5";
    } else {
        statusElement.textContent = "closed 😔";
        statusElement.style.color = "#b3483a";
    }
});