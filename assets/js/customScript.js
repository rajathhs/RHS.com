document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const loadingMessage = document.querySelector('.loading');
    const sentMessage = document.querySelector('.sent-message');
    
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


    contactForm.addEventListener('submit', async function(event) {

        sentMessage.style.display = 'none'; // Hide sent message if previously shown

        const formData = new FormData(contactForm);
        const action = 'https://formspree.io/f/mpwazkll'; // Your Formspree endpoint

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            alert(response)

            if (response.ok) {
                sentMessage.style.display = 'block'; // Show success message
                contactForm.reset(); // Clear the form fields
            } else {
                // Handle other status codes (if needed)
                const errorData = await response.json();
                console.error('Formspree Error:', errorData);
                // Handle error scenario (show error message, etc.)
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            // Handle fetch error (show error message, etc.)
        }
    });

});