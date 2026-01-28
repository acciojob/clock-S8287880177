function updateTimer() {
    const now = new Date();  
    document.getElementById("timer").textContent = now.toLocaleString();
}

// Run once when page loads
updateTimer();

// Update every second
setInterval(updateTimer, 1000);

