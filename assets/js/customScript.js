document.addEventListener('DOMContentLoaded', function () {
    // Set your birth date (year, month, day)
    const birthDate = new Date(1991,5, 17); // Example: June 15, 1990

    // Function to calculate the current age
    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        // Adjust age if birthday hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
        return age;
    }

    // Function to update the age in the HTML
    function updateAge() {
        const ageElement = document.getElementById('age');
        const currentAge = calculateAge(birthDate);
        ageElement.textContent = currentAge;
    }

    // Update the age when the page loads
    updateAge();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var emailField = document.getElementById('email');
    var email = emailField.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});