//your JS code here. If required.
<!DOCTYPE html>
<html>
<head>
  <title>Clock Timer</title>
</head>
<body>

  <!-- Timer Display -->
  <p id="timer"></p>

  <script>
    function updateTimer() {
      const now = new Date(); // current system date & time

      // Format date
      const date = now.toLocaleDateString();

      // Format time
      const time = now.toLocaleTimeString();

      // Show in the <p id="timer">
      document.getElementById("timer").textContent = `${date} ${time}`;
    }

    // Run immediately when page loads
    updateTimer();

    // Update every 1 second (1000 ms)
    setInterval(updateTimer, 1000);
  </script>

</body>
</html>
