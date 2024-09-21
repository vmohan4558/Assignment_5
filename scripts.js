document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting immediately

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const profilePic = document.getElementById('profilePic').files[0];

        // Regular expressions for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/; // Exactly 10 digits
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

        // Validation flags
        let isValid = true;
        let errorMessage = '';

        // Name Validation
        if (name === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        // Email Validation
        if (email === '') {
            isValid = false;
            errorMessage += 'Email is required.\n';
        } else if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Password Validation
        if (password === '') {
            isValid = false;
            errorMessage += 'Password is required.\n';
        } else if (!passwordRegex.test(password)) {
            isValid = false;
            errorMessage += 'Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers.\n';
        }

        // Phone Number Validation
        if (phone === '') {
            isValid = false;
            errorMessage += 'Phone number is required.\n';
        } else if (!phoneRegex.test(phone)) {
            isValid = false;
            errorMessage += 'Phone number must be exactly 10 digits.\n';
        }

        // Address Validation
        if (address === '') {
            isValid = false;
            errorMessage += 'Address is required.\n';
        }

        // Profile Picture Validation
        if (!profilePic) {
            isValid = false;
            errorMessage += 'Profile picture is required.\n';
        } else {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(profilePic.type)) {
                isValid = false;
                errorMessage += 'Profile picture must be an image (jpeg, png, gif).\n';
            }

            const maxSize = 2 * 1024 * 1024; // 2MB
            if (profilePic.size > maxSize) {
                isValid = false;
                errorMessage += 'Profile picture size must be less than 2MB.\n';
            }
        }

        if (isValid) {
            // If all validations pass, you can submit the form or perform further actions
            // For demonstration, we'll just show a success message
            alert('Registration successful!');
            registrationForm.reset();
        } else {
            // If validations fail, show the accumulated error messages
            alert(errorMessage);
        }
    });
});
