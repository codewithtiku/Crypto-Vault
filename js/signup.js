document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.querySelector('button');

    continueButton.addEventListener('click', function () {
        const inputFields = document.querySelectorAll('input');
        let allFieldsEntered = true;

        // Check if any input field is empty
        inputFields.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsEntered = false;
            }
        });

        // If any input field is empty, display error message
        if (!allFieldsEntered) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Please fill in all the fields.';
            errorMessage.style.color = 'red';

            // Check if error container already exists, create it if not
            let errorContainer = document.querySelector('.error-container');
            if (!errorContainer) {
                errorContainer = document.createElement('div');
                errorContainer.classList.add('error-container');
                const signUpDiv = document.querySelector('.signup');
                signUpDiv.appendChild(errorContainer);
            }

            // Insert error message into the container
            errorContainer.innerHTML = '';
            errorContainer.appendChild(errorMessage);
        } else {
            // Clear input field values and redirect
            inputFields.forEach(input => {
                input.value = '';
            });
            window.location.href = 'index.html';
        }
    });
});
