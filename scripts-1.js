document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Email and Password must be filled out");
    } else {
        alert("Login successful!");
    }
});
