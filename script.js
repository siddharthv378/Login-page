function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Entri Elevate" && password === "admin123") {
        window.location.href = "homepage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    const email = prompt("Enter the email");
    if (email) {
        alert("Verification code sent to your email");
    }
});
