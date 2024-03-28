document.addEventListener('DOMContentLoaded', function() {
    var statusElement = document.getElementById('status');
    var now = new Date();
    var month = now.getUTCMonth() + 1; // Months are zero indexed, so add 1
    var day = now.getUTCDate();
    var currentUTCHour = now.getUTCHours();
    var currentPSTHour;

    // Check if current date is within DST period (March to November)
    if ((month > 3 && month < 11) || (month === 3 && day > 7) || (month === 11 && day < 7)) {
        currentPSTHour = (currentUTCHour - 7 + 24) % 24; // Adjusting for PDT
    } else {
        currentPSTHour = (currentUTCHour - 8 + 24) % 24; // Adjusting for PST
    }

    if (currentPSTHour >= 11 && currentPSTHour < 22) {
        statusElement.textContent = "open 🥳";
        statusElement.style.color = "#6c90a5";
    } else {
        statusElement.textContent = "closed 😔";
        statusElement.style.color = "#b3483a";
    }
});
