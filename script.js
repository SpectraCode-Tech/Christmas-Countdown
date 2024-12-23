        // Set the target date and time
        const targetDate = new Date("2024-12-24T23:59:59").getTime();

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            

            // Display the countdown
            document.getElementById("countdown").innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the countdown is over, stop the interval
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Time's up!";
            }
        }, 1000);